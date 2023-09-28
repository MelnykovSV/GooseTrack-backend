const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const getUserReviews = async (req, res) => {
  const owner = req.user.id;

  if (!owner) {
    throw HttpError(400, "Owner of review is missing");
  }

  const result = await Review.find({ owner });
  if (result.length === 0) {
    throw HttpError(404, "Reviews are not found");
  }

  res.json(result);
};

module.exports = getUserReviews;
