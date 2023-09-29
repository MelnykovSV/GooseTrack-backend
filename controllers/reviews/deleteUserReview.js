const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const deleteUserReviews = async (req, res) => {
  const owner = req.user.id;
  const result = await Review.findOneAndRemove({ owner });
  if (!result) {
    throw new HttpError(404, "Not found");
  }
  res.json({
    code: 200,
    message: "Review deleted",
  });
};

module.exports = deleteUserReviews;
