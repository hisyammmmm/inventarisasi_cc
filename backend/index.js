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
  origin: ['http://127.0.0.1:5500', 'https://inventarisasi-fe-dot-b-05-450916.uc.r.appspot.com/'],  // Ganti dengan URL tempat frontend berjalan
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(UserRoute);
app.use(BarangRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
