import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function initDatabase() {
  try {
    // Read and execute the schema file
    const schema = fs.readFileSync(path.join(__dirname, 'src/db/schema.sql'), 'utf8');
    await pool.query(schema);
    console.log('Database schema initialized successfully');

    // Create default admin user if not exists
    const defaultAdmin = {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD || 'admin123'
    };

    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING RETURNING *',
      [defaultAdmin.username, defaultAdmin.password]
    );

    if (result.rows.length > 0) {
      console.log('Default admin user created');
    } else {
      console.log('Default admin user already exists');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDatabase(); 