const { User } = require("../../models/auth");

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    accessToken: null,
    refreshToken: null,
  });
  res.status(200).json({
    code: 200,
    message: "Logout success",
  });
};

module.exports = logoutUser;
