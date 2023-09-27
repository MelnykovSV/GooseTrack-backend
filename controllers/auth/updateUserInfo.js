const { HttpError } = require("../../helpers/index");
const { User } = require("../../models/auth");
require("dotenv").config();

const updateUserInfo = async (req, res) => {
  const user = req.user;

  const { phone, skype, birthday, email, userName } = req.body;

  if (userName) {
    const user = await User.find({ userName });
    if (user) {
      throw HttpError(409, "User with this user name already exists");
    }
  }
  if (email) {
    const user = await User.find({ email });
    if (user) {
      throw HttpError(409, "User with this email already exists");
    }
  }
  console.log(req.body);
  const response = await User.findByIdAndUpdate(
    user._id,
    { phone, skype, birthday, email, userName },
    { new: true }
  );

  if (!response) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "User info updated",
    data: { phone, skype, birthday, email, userName },
  });
};

module.exports = updateUserInfo;
