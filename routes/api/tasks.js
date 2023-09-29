const express = require("express");
const tasksRouter = express.Router();

const { authenticate } = require("./../../middlewares/index");
const {
  getTasksByMonth,
  getTasksByDay,
  createTask,
  updateTask,
  deleteTask,
} = require("./../../controllers/tasks");

tasksRouter.get("/tasks/month", authenticate, getTasksByMonth);

tasksRouter.get("/tasks/day", authenticate, getTasksByDay);

tasksRouter.post("/tasks", validateTaskSchema, authenticate, createTask);

tasksRouter.patch("/tasks/:id", validateTaskSchema, authenticate, updateTask);

tasksRouter.delete("/tasks/:id", authenticate, deleteTask);

module.exports = tasksRouter;
