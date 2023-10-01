const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");

const getTasksByMonth = async (req, res) => {
  const user = req.user;
  const month = req.params.month;

  const monthRegExp = new RegExp(`^${month}`);

  const tasks = await Task.find(
    {
      date: { $regex: monthRegExp, $options: "i" },
      owner: user._id,
    },
    "-owner -createdAt -updatedAt"
  );

  if (!tasks.length) {
    throw HttpError(404, "No tasks found");
  }

  res.status(201).json({
    code: 201,
    message: "Task updated",
    data: tasks,
  });
};

module.exports = getTasksByMonth;
