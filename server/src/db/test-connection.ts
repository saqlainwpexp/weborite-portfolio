import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testConnection() {
  const connectionString = `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || 'W3bor!t3'}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME || 'heroharbor'}`;
  
  console.log('Database Connection String:', connectionString.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'));
  
  const pool = new Pool({
    connectionString,
  });

  try {
    const client = await pool.connect();
    console.log('Successfully connected to the database');
    
    // Test a simple query
    const result = await client.query('SELECT NOW()');
    console.log('Query result:', result.rows[0]);
    
    client.release();
    await pool.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

testConnection(); 