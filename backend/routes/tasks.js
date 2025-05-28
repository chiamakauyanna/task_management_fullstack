import express from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
const route = express.Router();

route.get("/", getTasks);
route.get("/:id", getTaskById);
route.post("/", createTask);
route.put("/:id", updateTask);
route.delete("/:id", deleteTask);

export default route;
