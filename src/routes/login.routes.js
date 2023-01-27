import { Router } from "express";
import { getItems } from "../controllers/login.controllers.js";

const router = Router();

router.post("/login", getItems);

export default router;
