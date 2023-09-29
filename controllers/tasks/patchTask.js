const { MonthlyTask, DailyTask } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const patchTask = async (req, res, next) => {
  try {
    const taskId = parseInt(req.params.id);
    const updatedData = req.body;

    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const validationResult = taskSchema.validate(updatedData);

      if (validationResult.error) {
        return res
          .status(400)
          .json({ message: validationResult.error.details[0].message });
      }

      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = patchTask;
