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

  const responseData = {
    code: 200,
    message: "User review",
    data: {
      rating: result.rating,
      comment: result.comment,
    },
  };

  res.json(responseData);
};

module.exports = getUserReviews;
