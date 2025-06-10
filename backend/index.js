import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import BarangRoute from './routes/BarangRoute.js';

dotenv.config();

const app = express();

// CORS middleware harus diletakkan PERTAMA sebelum middleware lainnya
app.use(cors({
  origin: [
    'https://inventarisasi-fe-dot-b-05-450916.uc.r.appspot.com',
    'http://localhost:3000', // untuk development
    'http://localhost:8080'  // untuk development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200 // untuk mendukung browser lama
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use(UserRoute);
app.use(BarangRoute);

// Error handling middleware (letakkan di akhir)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: err.message,
    message: 'Internal Server Error' 
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;