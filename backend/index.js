import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import BarangRoute from './routes/BarangRoute.js';

dotenv.config();

const app = express();

// Middleware CORS
const corsOptions = {
  origin: ['https://inventarisasi-fe-dot-b-05-450916.uc.r.appspot.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Tangani preflight request (OPTIONS)

app.use(express.json());
app.use(UserRoute);
app.use(BarangRoute);

// Middleware Error Handler (letakkan paling bawah setelah route)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
