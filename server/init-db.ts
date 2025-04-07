import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import { blogPosts, users } from '../shared/schema';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/heroharbor",
  connectionTimeoutMillis: 5000,
});

// Add error handler for the pool
pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
});

// Create a Drizzle ORM instance
const db = drizzle(pool);

// Initialize database tables
async function initDatabase() {
  console.log('Initializing database...');
  try {
    // Create users table
    console.log('Creating users table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'admin'
      )
    `);
    
    // Create blog_posts table
    console.log('Creating blog_posts table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        featured_image TEXT,
        meta_title TEXT,
        meta_description TEXT,
        keywords TEXT,
        author_id INTEGER REFERENCES users(id),
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create team_members table
    console.log('Creating team_members table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        bio TEXT,
        image_url TEXT,
        social_links JSONB,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create portfolio_projects table
    console.log('Creating portfolio_projects table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS portfolio_projects (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT,
        project_url TEXT,
        technologies TEXT[],
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create testimonials table
    console.log('Creating testimonials table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        client_name TEXT NOT NULL,
        client_position TEXT,
        client_company TEXT,
        content TEXT NOT NULL,
        image_url TEXT,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create services table
    console.log('Creating services table...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        icon TEXT,
        features TEXT[],
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    // Insert a default admin user if not exists
    console.log('Checking for default user...');
    const userResult = await pool.query('SELECT * FROM users WHERE username = $1', ['admin']);
    if (userResult.rows.length === 0) {
      console.log('Creating default admin user...');
      await pool.query('INSERT INTO users (username, password, role) VALUES ($1, $2, $3)', 
        ['admin', 'admin', 'admin']);
    }
    
    console.log('Database initialization completed successfully');
  } catch (error: any) {
    console.error('Database initialization error:', error.message);
  } finally {
    // Close the connection
    await pool.end();
  }
}

// Run the initialization
initDatabase().catch(console.error); 