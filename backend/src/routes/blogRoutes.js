import express from "express";
import { addBlog, getBlogs } from "../controller/blog.js";
import { protectRouter } from "../middleware/auth.js";

const router = express.Router();

router.post("/add", protectRouter, addBlog);
router.get("/", getBlogs);

export default router;
