import express from "express";
import { addQuote, getQuotes } from "../controllers/quote.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", verifyToken, getQuotes);
router.post("/:id/addQuote", verifyToken, addQuote);

export default router;
