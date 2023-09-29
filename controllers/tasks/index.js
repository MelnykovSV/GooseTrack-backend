const { ctrlWrapper } = require("../../helpers/index");
const getTasksByMonth = require("./getTasksByMonth");
const getTasksByDay = require("./getTasksByDay");
const postTask = require("./postTask");
const patchTask = require("./patchTask");
const deleteTask = require("./deleteTasks");

module.exports = {
  registerUser: ctrlWrapper(getTasksByMonth),
  registerUser: ctrlWrapper(getTasksByDay),
  loginUser: ctrlWrapper(postTask),
  logoutUser: ctrlWrapper(patchTask),
  getCurrentUser: ctrlWrapper(deleteTask),
};
