const express = require("express");
const authRouter = express.Router();

const {
  authenticate,
  validateBody,
  authenticateRefresh,
} = require("./../../middlewares/index");

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserInfo,
  refresh,
} = require("./../../controllers/auth");

const {
  registerJoiSchema,
  loginJoiSchema,
  updateUserJoiSchema,
} = require("./../../models/auth");

authRouter.post("/register", validateBody(registerJoiSchema), registerUser);
authRouter.post("/login", validateBody(loginJoiSchema), loginUser);
authRouter.post("/logout", authenticate, logoutUser);
authRouter.get("/current", authenticate, getCurrentUser);
authRouter.patch(
  "/user",
  authenticate,
  validateBody(updateUserJoiSchema),
  updateUserInfo
);
authRouter.patch("/refresh", authenticateRefresh, refresh);

module.exports = authRouter;
