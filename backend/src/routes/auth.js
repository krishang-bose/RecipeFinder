import express from "express";
import { protectRouter } from "../middleware/auth.js";
import { login, logout, signup, checkAuth } from "../controller/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", protectRouter, checkAuth);

export default router;