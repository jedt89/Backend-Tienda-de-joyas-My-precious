import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'joyas',
  password: process.env.DB_PASS,
  port: 5432,
  allowExitOnIdle: true
});

try {
  await pool.query('SELECT NOW()');
  console.log('Base de datos conectada');
} catch (error) {
  console.log(error);
}

export default pool;
