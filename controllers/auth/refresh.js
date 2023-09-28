const { generateTokens, createResponse } = require("../../helpers/index");
const { User } = require("../../models/auth");

const refresh = async (req, res) => {
  const { _id } = req.user;
  const { accessToken, refreshToken } = generateTokens(_id);

  await User.findByIdAndUpdate(_id, { accessToken, refreshToken });

  const data = {
    accessToken,
    refreshToken,
  };

  createResponse(res, 200, "Tokens refreshed", data);
};

module.exports = refresh;
