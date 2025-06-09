import express from "express";
import {
  getBarang,
  createBarang,
  getBarangById,
  updateBarang,
  deleteBarang,
} from "../controller/BarangController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// Semua route harus menggunakan verifyToken
router.get("/", verifyToken, getBarang);
router.post("/", verifyToken, createBarang);
router.get("/:id", verifyToken, getBarangById);
router.put("/:id", verifyToken, updateBarang);
router.delete("/:id", verifyToken, deleteBarang);

export default router;