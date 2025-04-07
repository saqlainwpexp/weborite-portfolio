import express from 'express';
import { Pool } from 'pg';
import { verifyToken } from '../middleware/auth';
import { pool } from '../db/db';

const router = express.Router();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Team Members Routes
router.get('/team', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM team_members ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
});

router.post('/team', verifyToken, async (req, res) => {
  const { name, role, image, bio } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO team_members (name, role, image, bio) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, role, image, bio]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create team member' });
  }
});

router.put('/team/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, role, image, bio } = req.body;
  try {
    const result = await pool.query(
      'UPDATE team_members SET name = $1, role = $2, image = $3, bio = $4 WHERE id = $5 RETURNING *',
      [name, role, image, bio, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Team member not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team member' });
  }
});

router.delete('/team/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM team_members WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Team member not found' });
    }
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team member' });
  }
});

// Portfolio Projects Routes
router.get('/portfolio', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM portfolio_projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio projects' });
  }
});

router.post('/portfolio', verifyToken, async (req, res) => {
  const { title, category, image, stats } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO portfolio_projects (title, category, image, stats) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, category, image, stats]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create portfolio project' });
  }
});

router.put('/portfolio/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { title, category, image, stats } = req.body;
  try {
    const result = await pool.query(
      'UPDATE portfolio_projects SET title = $1, category = $2, image = $3, stats = $4 WHERE id = $5 RETURNING *',
      [title, category, image, stats, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Portfolio project not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update portfolio project' });
  }
});

router.delete('/portfolio/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM portfolio_projects WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Portfolio project not found' });
    }
    res.json({ message: 'Portfolio project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete portfolio project' });
  }
});

// Testimonials Routes
router.get('/testimonials', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

router.post('/testimonials', verifyToken, async (req, res) => {
  const { name, role, company, image, quote, rating } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO testimonials (name, role, company, image, quote, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, role, company, image, quote, rating]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
});

router.put('/testimonials/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, role, company, image, quote, rating } = req.body;
  try {
    const result = await pool.query(
      'UPDATE testimonials SET name = $1, role = $2, company = $3, image = $4, quote = $5, rating = $6 WHERE id = $7 RETURNING *',
      [name, role, company, image, quote, rating, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update testimonial' });
  }
});

router.delete('/testimonials/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM testimonials WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
});

// Services Routes
router.get('/services', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

router.post('/services', verifyToken, async (req, res) => {
  const { title, description, icon } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO services (title, description, icon) VALUES ($1, $2, $3) RETURNING *',
      [title, description, icon]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
});

router.put('/services/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;
  try {
    const result = await pool.query(
      'UPDATE services SET title = $1, description = $2, icon = $3 WHERE id = $4 RETURNING *',
      [title, description, icon, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
});

router.delete('/services/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
});

// Test endpoint
router.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'Database connection successful',
      timestamp: result.rows[0].now
    });
  } catch (err: any) {
    console.error('Database error:', err);
    res.status(500).json({
      message: 'Database connection failed',
      error: err.message
    });
  }
});

export default router; 