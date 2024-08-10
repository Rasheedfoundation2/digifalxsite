// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

// MySQL configuration
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "digifalx_db",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phoneNumber } = req.body;

    try {
      const [result] = await pool.query(
        "INSERT INTO PopupForm (name, email, phoneNumber) VALUES (?, ?, ?)",
        [name, email, phoneNumber]
      );
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "Message not sent!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
