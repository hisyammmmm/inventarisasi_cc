import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import BarangRoute from './routes/BarangRoute.js';

dotenv.config();

const app = express();

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

// Menggunakan CORS middleware
app.use(cors({
  origin: 'http://127.0.0.1:5500',  // Ganti dengan URL tempat frontend berjalan
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(UserRoute);
app.use(BarangRoute);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
