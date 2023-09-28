const HttpError = require("./../helpers/HttpError");
const { validateRefreshToken } = require("./../helpers/tokenHandlers");

const { User } = require("./../models/auth");
const authenticateRefresh = async (req, res, next) => {
  try {
    const [bearer = "", token = ""] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw HttpError(401, "Not authorized");
    }

    const { id } = validateRefreshToken(token);

    const user = await User.findById(id);

    if (!user || !user.refreshToken || user.refreshToken !== token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;

    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authenticateRefresh;
