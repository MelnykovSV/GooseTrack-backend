const CreateTask = require('../../models/tasks');

const { MonthlyTask, DailyTask } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const createTask = async (req, res, next) => {
  try {
    const newTask = req.body;
    const validationResult = taskSchema.validate(newTask);

    if (validationResult.error) {
      return res
        .status(400)
        .json({ message: validationResult.error.details[0].message });
    }

    tasks.push(newTask);
    res.json(newTask);
  } catch (error) {
    next(error);
  }
  return await CreateTask.create();
};

module.exports = createTask;
