const { ctrlWrapper } = require("../../helpers/index");
const createTask = require("./createTask");
const updateTask = require("./updateTask");
const deleteTask = require("./deleteTask");
const getTasksByDay = require("./getTasksByDay");
const getTasksByMonth = require("./getTasksByMonth");

module.exports = {
  createTask: ctrlWrapper(createTask),
  updateTask: ctrlWrapper(updateTask),
  deleteTask: ctrlWrapper(deleteTask),
  getTasksByDay: ctrlWrapper(getTasksByDay),
  getTasksByMonth: ctrlWrapper(getTasksByMonth),
};
