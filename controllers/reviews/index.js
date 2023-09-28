const { ctrlWrapper } = require("../../helpers/index");

const getAllReviews = require("./getAllReviews");
const addReview = require("./addReview");
const getUserReviews = require("./getUserReviews");
const updateUserReviews = require("./updateUserReview");
const deleteUserReviews = require("./deleteUserReview");

module.exports = {
  getAllReviews: ctrlWrapper(getAllReviews),
  addReview: ctrlWrapper(addReview),
  getUserReviews: ctrlWrapper(getUserReviews),
  updateUserReviews: ctrlWrapper(updateUserReviews),
  deleteUserReviews: ctrlWrapper(deleteUserReviews),
};
