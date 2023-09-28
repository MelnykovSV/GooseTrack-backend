const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const updateUserReviews = async (req, res) => {
  const owner = req.user.id;
  if (!owner) {
    throw HttpError(400, "Owner of review is missing");
  }

  const result = await Review.findOneAndUpdate({ owner }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateUserReviews;
