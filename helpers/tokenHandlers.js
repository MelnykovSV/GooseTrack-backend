const jwt = require("jsonwebtoken");
const { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } = process.env;

// const generateToken = (id) => {
//   const payload = {
//     id,
//   };
//   const token = jwt.sign(payload, SECRET_ACCESS_KEY, { expiresIn: "24h" });
//   return token;
// };

const generateTokens = (id) => {
  const payload = {
    id,
  };
  const accessToken = jwt.sign(payload, SECRET_ACCESS_KEY, {
    expiresIn: "15min",
  });
  const refreshToken = jwt.sign(payload, SECRET_REFRESH_KEY, {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
};

const validateAccessToken = (token) => {
  const result = jwt.verify(token, SECRET_ACCESS_KEY);
  return result;
};

const validateRefreshToken = (token) => {
  const result = jwt.verify(token, SECRET_REFRESH_KEY);
  return result;
};

module.exports = { generateTokens, validateAccessToken, validateRefreshToken };
