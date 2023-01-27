import { Router } from "express";
import { createItems } from "../controllers/posts.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.middlewares.js";

const router = Router();

router.post("/posts", verifyToken, createItems);

export default router;
