const { HttpError } = require("../../helpers/index");
const bcrypt = require("bcrypt");
const { User } = require("../../models/auth");
const { generateTokens } = require("../../helpers/tokenHandlers");
const { nanoid } = require("nanoid");

require("dotenv").config();

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const verificationCode = nanoid();
  const hashPassword = await bcrypt.hash(password, 10);
  const { userName, subscription, _id, avatarURL } = await User.create({
    ...req.body,
    password: hashPassword,
    verificationCode,
  });

  const { accessToken, refreshToken } = generateTokens(_id);

  await User.findByIdAndUpdate(_id, {
    accessToken,
  });

  res.status(201).json({
    status: "success",
    code: 201,
    message: "New user created",
    data: {
      accessToken,
      user: {
        userName,
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = registerUser;
