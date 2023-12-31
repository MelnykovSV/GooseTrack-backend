const HttpError = require("./../helpers/HttpError");
const { validateAccessToken } = require("./../helpers/tokenHandlers");

const { User } = require("./../models/auth");
const authenticate = async (req, res, next) => {
  try {
    const [bearer = "", token = ""] = req.headers.authorization.split(" ");
    console.log(req.body);

    if (bearer !== "Bearer" || !token) {
      throw HttpError(401, "Not authorized");
    }

    const { id } = validateAccessToken(token);
    const user = await User.findById(id);

    if (!user || !user.accessToken || user.accessToken !== token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;

    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authenticate;
