const { HttpError } = require("../../helpers");
const { Review } = require("../../models/review");

const addReview = async (req, res) => {
  const owner = req.user.id;
  const userName = req.user.userName;

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

  const review = await Review.create({ ...req.body, owner, userName });

  if (!review) {
    throw HttpError(500, "Internal Server Error (failed to create a review)");
  }

  res.status(201).json({
    code: 200,
    message: "Review added",
    data: review,
  });
};

module.exports = addReview;
