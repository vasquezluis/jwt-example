import { Router } from "express";
import { getItems } from "../controllers/items.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.middlewares.js";

const router = Router();

router.get("/items", verifyToken, getItems);

export default router;
