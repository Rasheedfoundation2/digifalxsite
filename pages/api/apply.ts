import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// MySQL configuration
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'digifalx_db',
});

export const config = {
  api: {
    bodyParser: true, // Use JSON body parser
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, contact, email, date } = req.body;

      // Ensure all required fields are present
      if (!name || !contact || !email || !date) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Save form data to the database
      await pool.query(
        'INSERT INTO applications (name, contact, email, date) VALUES (?, ?, ?, ?)',
        [name, contact, email, date]
      );
      res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error submitting application.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
