const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

// API route to get all doctors
app.get('/doctors', async (req, res) => {
  try {
    const doctors = await pool.query('SELECT * FROM doctors');
    res.json(doctors.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
