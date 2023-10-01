const { MonthlyTask, DailyTask } = require("../models/tasks");

async function findTaskById(req, res, next) {
  const { id } = req.params;
  try {
    const monthlyTask = await MonthlyTask.findById(id);
    if (monthlyTask) {
      req.task = monthlyTask;
      return next();
    }
    const dailyTask = await DailyTask.findById(id);
    if (dailyTask) {
      req.task = dailyTask;
      return next();
    }
    return res.status(404).json({ message: "Task not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  findTaskById,
};
