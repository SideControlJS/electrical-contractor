import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
const db = new Database('volt-and-surge.db');

app.use(cors());
app.use(express.json());

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service_type TEXT NOT NULL,
    preferred_date TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Booking endpoints
app.post('/api/bookings', (req, res) => {
  const { name, email, phone, serviceType, preferredDate, description } = req.body;
  
  try {
    const stmt = db.prepare(`
      INSERT INTO bookings (name, email, phone, service_type, preferred_date, description)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(name, email, phone, serviceType, preferredDate, description);
    res.json({ id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact form endpoints
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const stmt = db.prepare(`
      INSERT INTO contact_messages (name, email, message)
      VALUES (?, ?, ?)
    `);
    
    const result = stmt.run(name, email, message);
    res.json({ id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});