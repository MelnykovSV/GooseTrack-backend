const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");

const getTasksByDay = async (req, res) => {
  const user = req.user;
  const day = req.params.day;

  const tasks = await Task.find(
    { date: day, owner: user._id },
    "-owner -createdAt -updatedAt"
  );

  if (!tasks.length) {
    throw HttpError(404, "No tasks found");
  }

  res.status(201).json({
    code: 201,
    message: `Tasks for ${day}`,
    data: tasks,
  });
};

module.exports = getTasksByDay;
