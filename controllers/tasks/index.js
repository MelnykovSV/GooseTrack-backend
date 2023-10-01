const createTask = require("./createTask");
const updateTask = require("./updateTask");
const deleteTask = require("./deleteTask");
const getTasksByDay = require("./getTasksByDay");
const getTasksByMonth = require("./getTasksByMonth");

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasksByDay,
  getTasksByMonth
};
