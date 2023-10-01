const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

function isValidTaskId(req, res, next) {
  const { taskId } = req.params;
  if (!isValidObjectId(taskId)) {
    next(HttpError(400, `${taskId} is not valid id`));
  }
  next();
}

function isValidReviewId(req, res, next) {
  const { reviewId } = req.params;
  if (!isValidObjectId(reviewId)) {
    next(HttpError(400, `${reviewId} is not valid id`));
  }
  next();
}

module.exports = { isValidTaskId, isValidReviewId };
