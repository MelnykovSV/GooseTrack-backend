const express = require("express");
const tasksRouter = express.Router();


const {
  fetchCollectionTasksByMonth,
  fetchCollectionTasksByDay,
  createTask,
  updateTask,
  deleteTask,
} = require("../../controllers/tasks");

const {
  authenticate,
  findTaskById,
  validateBody,
} = require("../../middlewares");


tasksRouter.get("/tasks/month", authenticate, validateBody, fetchCollectionTasksByMonth);

tasksRouter.get("/tasks/day", authenticate, validateBody, fetchCollectionTasksByDay);

tasksRouter.post("/tasks", authenticate, validateBody, createTask);

tasksRouter.patch("/tasks/:id", authenticate, findTaskById, updateTask);

tasksRouter.delete("/tasks/:id", authenticate, findTaskById, deleteTask);

module.exports = tasksRouter;
