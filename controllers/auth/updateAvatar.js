const { HttpError } = require("../../helpers/index");
const { User } = require("../../models/auth");
const cloudinary = require("cloudinary");

const updateAvatar = async (req, res) => {
  const user = req.user;
  const imageName = req.file.path.split("/").pop();

  const avatarUrl = cloudinary.url(imageName, {
    width: 250,
    height: 250,
    crop: "fill",
  });

  const response = await User.findByIdAndUpdate(user._id, { avatarUrl });

  if (!response) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    code: 200,
    message: "User avatar updated",
    data: { avatarUrl },
  });
};

module.exports = updateAvatar;
