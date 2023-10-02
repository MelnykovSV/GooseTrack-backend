const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");

const deleteTask = async (req, res) => {
  const user = req.user;
  const taskId = req.params.taskId;

  const task = await Task.findOneAndDelete({ _id: taskId, owner: user._id });

  if (!task) {
    throw HttpError(404, "Task not found");
  }

  const { _id, title, priority, status, date, start, end } = task;

  res.status(201).json({
    code: 201,
    message: "Task deleted",
    data: { _id, title, priority, status, date, start, end },
  });
};

module.exports = deleteTask;
