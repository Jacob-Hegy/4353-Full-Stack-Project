import express from "express";
import { getUser, saveProfile } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getUser);
router.patch("/:id/saveProfile", verifyToken, saveProfile);

export default router;
