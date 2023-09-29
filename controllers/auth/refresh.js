const { generateTokens } = require("../../helpers/index");
const { User } = require("../../models/auth");

const refresh = async (req, res) => {
  const { _id } = req.user;
  const { accessToken, refreshToken } = generateTokens(_id);

  await User.findByIdAndUpdate(_id, { accessToken, refreshToken });

  const data = {
    accessToken,
    refreshToken,
  };

  res.status(200).json({
    code: 200,
    message: "Tokens refreshed",
    data,
  });
};

module.exports = refresh;
