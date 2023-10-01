const { HttpError } = require("../../helpers/index");
const { User } = require("../../models/auth");

const updateUserInfo = async (req, res) => {
  const user = req.user;

  if (req.body.userName) {
    const foundUser = await User.findOne({ userName: req.body.userName });
    if (foundUser && !foundUser._id.equals(user._id)) {
      throw HttpError(409, "User with this user name already exists");
    }
  }
  if (req.body.email) {
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser && !foundUser._id.equals(user._id)) {
      throw HttpError(409, "User with this email already exists");
    }
  }

  const dbRequestBody = Object.keys(req.body).reduce((attrs, key) => {
    if (!req.body[key]) {
      return { ...attrs };
    } else {
      return { ...attrs, [key]: req.body[key] };
    }
  }, {});

  console.log(dbRequestBody);

  const response = await User.findByIdAndUpdate(user._id, dbRequestBody, {
    new: true,
  });

  if (!response) {
    throw HttpError(404, "Not found");
  }

  const { phone, skype, birthday, email, userName } = response;

  res.status(200).json({
    code: 200,
    message: "User info updated",
    data: { phone, skype, birthday, email, userName },
  });
};

module.exports = updateUserInfo;
