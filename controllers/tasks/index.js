const { ctrlWrapper } = require("../../helpers/index");
const getTasks = require("./getTasks");
const postTask = require("./postTask");
const patchTask = require("./patchTask");
const deleteTask = require("./deleteTask");

module.exports = {
  registerUser: ctrlWrapper(getTasks),
  loginUser: ctrlWrapper(postTask),
  logoutUser: ctrlWrapper(patchTask),
  getCurrentUser: ctrlWrapper(deleteTask),
};
