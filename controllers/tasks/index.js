const { ctrlWrapper } = require("../../helpers/index");
const fetchCollectionTasksByMonth = require("./getTasksByMonth");
const fetchCollectionTasksByDay = require("./getTasksByDay");
const createTask = require("./postTask");
const updateTask = require("./patchTask");
const deleteTask = require("./deleteTasks");

module.exports = {
  fetchCollectionTasksByMonth: ctrlWrapper(fetchCollectionTasksByMonth),
  fetchCollectionTasksByDay: ctrlWrapper(fetchCollectionTasksByDay),
  createTask: ctrlWrapper(createTask),
  updateTask: ctrlWrapper(updateTask),
  deleteTask: ctrlWrapper(deleteTask),
};
