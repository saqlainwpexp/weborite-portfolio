import type { Express } from "express";
import { createServer, type Server } from "http";
import { sql } from "drizzle-orm";
import { eq, desc } from "drizzle-orm";
import { storage } from "./storage";
import { blogPosts } from "../shared/schema";
import multer from "multer";
import path from "path";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from 'pg';
const { Pool } = pkg;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Create a PostgreSQL connection pool with better error handling
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/heroharbor",
  // Add connection timeout and retry settings
  connectionTimeoutMillis: 5000,
  max: 20,
  idleTimeoutMillis: 30000,
});

// Add error handler for the pool
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Test database connection with retries
async function testConnection(retries = 5) {
  for (let i = 0; i < retries; i++) {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT NOW()');
      client.release();
      console.log('Database connected successfully at:', result.rows[0].now);
      return true;
    } catch (err: any) {
      console.error(`Database connection attempt ${i + 1} failed:`, err.message);
      if (i === retries - 1) {
        console.error('All database connection attempts failed');
        return false;
      }
      // Wait for 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  return false;
}

// Initialize database connection
testConnection().catch(console.error);

// Create a Drizzle ORM instance
const db = drizzle(pool);

const upload = multer({ dest: 'uploads/' });

// Authentication middleware
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      
      if (!user.rows[0] || !await bcrypt.compare(password, user.rows[0].password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: user.rows[0].id, username: user.rows[0].username, role: user.rows[0].role },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      res.json({ token });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Team Members routes
  app.get("/api/team", async (req, res) => {
    try {
      const team = await pool.query('SELECT * FROM team_members ORDER BY created_at DESC');
      res.json(team.rows);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/team", authenticateToken, async (req, res) => {
    try {
      const { name, position, bio, image_url, social_links } = req.body;
      const result = await pool.query(
        'INSERT INTO team_members (name, position, bio, image_url, social_links) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, position, bio, image_url, social_links]
      );
      res.json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Portfolio Projects routes
  app.get("/api/portfolio", async (req, res) => {
    try {
      const projects = await pool.query('SELECT * FROM portfolio_projects ORDER BY created_at DESC');
      res.json(projects.rows);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/portfolio", authenticateToken, async (req, res) => {
    try {
      const { title, description, image_url, project_url, technologies, featured } = req.body;
      const result = await pool.query(
        'INSERT INTO portfolio_projects (title, description, image_url, project_url, technologies, featured) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [title, description, image_url, project_url, technologies, featured]
      );
      res.json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Testimonials routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC');
      res.json(testimonials.rows);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/testimonials", authenticateToken, async (req, res) => {
    try {
      const { client_name, client_position, client_company, content, image_url, rating } = req.body;
      const result = await pool.query(
        'INSERT INTO testimonials (client_name, client_position, client_company, content, image_url, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [client_name, client_position, client_company, content, image_url, rating]
      );
      res.json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Services routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await pool.query('SELECT * FROM services ORDER BY created_at DESC');
      res.json(services.rows);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/services", authenticateToken, async (req, res) => {
    try {
      const { title, description, icon, features } = req.body;
      const result = await pool.query(
        'INSERT INTO services (title, description, icon, features) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, description, icon, features]
      );
      res.json(result.rows[0]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Existing routes
  app.post("/api/blog", async (req, res) => {
    try {
      const blogData = req.body;
      const slug = blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const blog = await db.insert(blogPosts).values({
        ...blogData,
        slug,
        authorId: 1 // TODO: Get from authenticated user
      }).returning();
      res.json(blog[0]);
    } catch (error: any) {
      console.error('Blog creation error:', error.message);
      res.status(500).json({ error: "Failed to create blog post", details: error.message });
    }
  });

  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await db.select().from(blogPosts)
        .where(eq(blogPosts.published, true))
        .orderBy(desc(blogPosts.createdAt));
      res.json(posts);
    } catch (error: any) {
      console.error('Blog fetch error:', error.message);
      res.status(500).json({ error: "Failed to fetch blog posts", details: error.message });
    }
  });

  app.post("/api/upload", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      // Store file in uploads directory and return URL
      const fileName = `${Date.now()}-${path.basename(req.file.originalname)}`;
      const filePath = path.join('uploads', fileName);
      res.json({ url: `/uploads/${fileName}` });
    } catch (error: any) {
      console.error('File upload error:', error.message);
      res.status(500).json({ error: "Failed to upload file", details: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
