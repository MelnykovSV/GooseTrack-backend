const { ctrlWrapper } = require("../../helpers/index");
const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const getCurrentUser = require("./getCurrentUser");
const updateUserInfo = require("./updateUserInfo");
const refresh = require("./refresh");
const updateAvatar = require("./updateAvatar");

module.exports = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  updateUserInfo: ctrlWrapper(updateUserInfo),
  refresh: ctrlWrapper(refresh),
  updateAvatar: ctrlWrapper(updateAvatar),
};
