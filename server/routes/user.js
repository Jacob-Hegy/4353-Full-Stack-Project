import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// UPDATE
router.patch("/:id/editProfile", verifyToken, editProfile);

// READ
router.get("/:id/getTodos", verifyToken, getTodos);

// UPDATE
router.patch("/:id/:todoId/updateTodo", verifyToken, updateTodo);

// DELETE
router.delete("/:id/:todoId/deleteTodo", verifyToken, deleteTodo);

export default router;
