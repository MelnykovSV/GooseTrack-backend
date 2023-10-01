const { Schema, model } = require("mongoose");
const Joi = require("joi");

const monthlyTaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 250,
  },
  month: {
    type: String,
    required: true,
  },
});

const dailyTaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 250,
  },
  date: {
    type: Date,
    required: true,
  },
});

const createTaskSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  end: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .when("start", {
      is: Joi.exist(),
      then: Joi.string().min(Joi.ref("start")).required(),
    }),
  priority: Joi.string().valid("low", "medium", "high").required(),
  date: Joi.string().isoDate().required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
});


const updateTaskSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .allow(""),
  end: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .when("start", {
      is: Joi.exist(),
      then: Joi.string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .min(Joi.ref("start"))
        .message("End time must be greater than or equal to start time"),
    })
    .allow(""),
  priority: Joi.string().valid("low", "medium", "high"),
  date: Joi.string().isoDate(),
  category: Joi.string().valid("to-do", "in-progress", "done"),
});




const MonthlyTask = model("MonthlyTask", monthlyTaskSchema);
const DailyTask = model("DailyTask", dailyTaskSchema);
const CreateTask = model("CreateTask", createTaskSchema);
const UpdateTask = model("UpdateTask", updateTaskSchema);

module.exports = {
  MonthlyTask,
  DailyTask,
  CreateTask,
  UpdateTask,
};
