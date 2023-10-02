const { HttpError } = require("../../helpers");
const { Review } = require("../../models/review");

const addReview = async (req, res) => {
  const owner = req.user.id;
  const userName = req.user.userName;
  const avatarUrl = req.user.avatarUrl;

  if (!owner) {
    throw HttpError(400, "Owner of review is missing");
  }

  if (!req.body) {
    throw HttpError(400, "Request body is missing");
  }

  const reviewAlreadyInDb = await Review.findOne({ owner });

  if (reviewAlreadyInDb) {
    throw HttpError(409, "Your review is already in our database");
  }

  const reviewData = { ...req.body, owner, userName, avatarUrl };
  const review = await Review.create(reviewData);

  if (!review) {
    throw HttpError(500, "Internal Server Error (failed to create a review)");
  }

  const responseData = {
    code: 201,
    message: "Review added",
    data: {
      rating: reviewData.rating,
      comment: reviewData.comment,
    },
  };

  res.status(201).json(responseData);
};

module.exports = addReview;
