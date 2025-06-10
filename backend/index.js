import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import BarangRoute from './routes/BarangRoute.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    'https://inventarisasi-fe-dot-b-05-450916.uc.r.appspot.com',
    'http://localhost:3000',
    'http://localhost:8080'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200
};

// CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ← INI WAJIB untuk handle preflight request

// Parsing JSON
app.use(express.json());

// Routes
app.use(UserRoute);
app.use(BarangRoute);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
