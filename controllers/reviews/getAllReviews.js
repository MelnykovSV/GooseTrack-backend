const { Review } = require("../../models/review");
const { HttpError } = require("../../helpers");

const getAllReviews = async (req, res) => {
  const result = await Review.aggregate([{ $sample: { size: 6 } }]);

  if (result.length === 0) {
    throw HttpError(404, "Reviews are not found");
  }

  const responseData = {
    code: 200,
    message: "Reviews found",
    data: result.map((review) => ({
      rating: review.rating,
      comment: review.comment,
      userName: review.userName,
      _id: review._id,
      avatarUrl: review.avatarUrl,
    })),
  };

  res.status(200).json(responseData);
};
module.exports = getAllReviews;
