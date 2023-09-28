const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("./../helpers/index");
const Joi = require("joi");

const {
  userNameRegexp,
  passwordRegexp,
  emailRegexp,
  dateRegexp,
} = require("./../regexp/index");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      match: userNameRegexp,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
      default: null,
    },
    birthday: {
      type: String,
      default: null,
    },
    phone: {
      type: Number,
      default: null,
    },
    skype: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerJoiSchema = Joi.object({
  userName: Joi.string()
    .pattern(
      userNameRegexp,
      "Username can contain only letters, numbers and underscores"
    )
    .required(),
  email: Joi.string().pattern(emailRegexp, "email").required(),
  password: Joi.string()
    .pattern(
      passwordRegexp,
      "Password should contain at least 1 capital letter, 1 normal letter and 1 number"
    )
    .required(),
  subscription: Joi.string(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp, "email").required(),
  password: Joi.string()
    .pattern(
      passwordRegexp,
      "Password should contain at least 1 capital letter, 1 normal letter and 1 number"
    )
    .required(),
});

const updateUserJoiSchema = Joi.object({
  birthday: Joi.string().pattern(dateRegexp, "YYYY-MM-DD"),
  phone: Joi.number(),
  skype: Joi.string(),
  email: Joi.string().pattern(emailRegexp, "email"),
  userName: Joi.string().pattern(
    userNameRegexp,
    "Username can contain only letters, numbers and underscores"
  ),
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User,
  registerJoiSchema,
  loginJoiSchema,
  updateUserJoiSchema,
};
