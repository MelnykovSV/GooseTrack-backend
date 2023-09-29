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

const MonthlyTask = model("MonthlyTask", monthlyTaskSchema);
const DailyTask = model("DailyTask", dailyTaskSchema);

module.exports = {
  MonthlyTask,
  DailyTask,
};
