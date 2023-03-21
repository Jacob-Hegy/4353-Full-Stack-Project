import express from "express";
import { addQuote, getQuotes } from "../controllers/quote.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/:id/addQuote", verifyToken, addQuote);
router.post("/:id/getQuotes", verifyToken, getQuotes);

export default router;
