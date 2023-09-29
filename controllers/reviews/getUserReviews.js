const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const getUserReviews = async (req, res) => {
  const owner = req.user.id;

  if (!owner) {
    throw HttpError(400, "Owner of review is missing");
  }

  const result = await Review.findOne({ owner });
  if (!result) {
    throw HttpError(404, "No user review found");
  }

  res.json({
    code: 200,
    message: "User review",
    data: result,
  });
};

module.exports = getUserReviews;
