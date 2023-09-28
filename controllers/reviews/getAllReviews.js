const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const getAllReviews = async (req, res) => {
  const result = await Review.find();

  if (result.length === 0) {
    throw HttpError(404, "Reviews are not found");
  }

  res.status(200).json(result);
};

module.exports = getAllReviews;
