const { HttpError } = require("../../helpers/index");

const bcrypt = require("bcrypt");
const { User } = require("../../models/auth");
const { generateTokens } = require("../../helpers/tokenHandlers");

const loginUser = async (req, res) => {
  const { email: loginEmail, password: loginPassword } = req.body;

  const user = await User.findOne({
    email: loginEmail,
  });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const { _id, email, userName, password, avatarUrl, birthday, phone, skype } =
    user;

  const isPasswordCorrect = await bcrypt.compare(loginPassword, password);

  if (!isPasswordCorrect) {
    throw HttpError(401, "Email or password invalid");
  }

  const { accessToken, refreshToken } = generateTokens(_id);
  await User.findByIdAndUpdate(_id, {
    accessToken,
    refreshToken,
  });

  res.status(200).json({
    code: 200,
    message: "User signed in",
    data: {
      accessToken,
      refreshToken,
      user: {
        userName,
        email,

        avatarUrl,
        birthday,
        phone,
        skype,
      },
    },
  });
};

module.exports = loginUser;
