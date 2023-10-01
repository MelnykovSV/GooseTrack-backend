const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("./../helpers/index");
const Joi = require("joi");

const { dateRegexp, timeRegexp } = require("./../regexp/index");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      //   match: userNameRegexp,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    status: {
      type: String,
      enum: ["todo", "inProgress", "done"],
      required: true,
    },
    date: {
      type: String,
      match: dateRegexp, // YYYY-MM-DD
      required: true,
    },
    start: {
      type: String, // hh:mm
      match: timeRegexp,
      required: true,
    },
    end: {
      type: String, // hh:mm
      match: timeRegexp,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const createTaskJoiSchema = Joi.object({
  title: Joi.string().max(250).required(),
  priority: Joi.string().valid("low", "medium", "high").required(),
  status: Joi.string().valid("todo", "inProgress", "done").required(),
  date: Joi.string().pattern(dateRegexp, "YYYY-MM-DD").required(),
  start: Joi.string().pattern(timeRegexp, "hh:mm").required(),
  end: Joi.string().pattern(timeRegexp, "hh:mm").required(),
});
const updateTaskJoiSchema = Joi.object({
  title: Joi.string().max(250),
  priority: Joi.string().valid("low", "medium", "high"),
  status: Joi.string().valid("todo", "inProgress", "done"),
  date: Joi.string().pattern(dateRegexp, "YYYY-MM-DD"),
  start: Joi.string().pattern(timeRegexp, "hh:mm"),
  end: Joi.string().pattern(timeRegexp, "hh:mm"),
});

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = {
  Task,
  createTaskJoiSchema,
  updateTaskJoiSchema,
};
