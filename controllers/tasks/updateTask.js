const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");

const updateTask = async (req, res) => {
  const user = req.user;
  const taskId = req.params.taskId;

  const task = await Task.findOneAndUpdate(
    { _id: taskId, owner: user._id },
    req.body,
    {
      new: true,
    }
  );

  if (!task) {
    throw HttpError(404, "Task not found");
  }

  const { title, priority, status, date, start, end } = task;

  res.status(201).json({
    code: 201,
    message: "Task updated",
    data: { title, priority, status, date, start, end },
  });
};

module.exports = updateTask;
