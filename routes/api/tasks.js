const express = require("express");
const tasksRouter = express.Router();

const {
  authenticate,
} = require("./../../middlewares/index");


const {
  getTasks, 
  createTask, 
  updateTask, 
  deleteTask, 
} = require("./../../controllers/tasks");

tasksRouter.get("/tasks", authenticate, getTasks)

tasksRouter.post("/tasks", validateTaskSchema, authenticate, createTask);

tasksRouter.patch("/tasks/:id", validateTaskSchema, authenticate, updateTask);

tasksRouter.delete("/tasks/:id", authenticate, deleteTask);

module.exports = tasksRouter;
