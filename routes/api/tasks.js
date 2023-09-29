const express = require("express");
const tasksRouter = express.Router();


const {
  getTasks, 
  createTask, 
  updateTask, 
  deleteTask, 
} = require("./../../controllers/tasks");

tasksRouter.get("/tasks", getTasks)

tasksRouter.post("/tasks", validateTaskSchema, createTask);

tasksRouter.patch("/tasks/:id", validateTaskSchema, updateTask);

tasksRouter.delete("/tasks/:id", deleteTask);

module.exports = tasksRouter;
