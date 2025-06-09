import express from 'express';
import {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,      // Pastikan ini di-import
  updateUser,
  deleteUser
} from '../controller/UserController.js';
import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

// Route untuk register dan login (tidak perlu token)
router.post('/register', registerUser);
router.post('/login', loginUser);     // Pastikan route ini ada

// Route yang memerlukan authentication
router.get('/users', verifyToken, getAllUsers);
router.get('/users/:id', verifyToken, getUserById);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router;