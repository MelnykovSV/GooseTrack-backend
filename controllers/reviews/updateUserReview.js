const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const updateUserReviews = async (req, res) => {
  const owner = req.user.id;
  if (!owner) {
    throw HttpError(400, "Owner of review is missing");
  }

  const reviewData = await Review.findOneAndUpdate({ owner }, req.body, {
    new: true,
  });
  if (!reviewData) {
    throw HttpError(404, "Not found");
  }

  const responseData = {
    code: 200,
    message: "Review updated",
    data: {
      rating: reviewData.rating,
      comment: reviewData.comment,
    },
  };

  res.status(200).json(responseData);
};

module.exports = updateUserReviews;
