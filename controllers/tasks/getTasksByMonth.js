const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");
const { monthRegexp } = require("./../../regexp");

const getTasksByMonth = async (req, res) => {
  const user = req.user;
  const month = req.params.month;

  if (!monthRegexp.test(month)) {
    throw HttpError(400, "Date has to be in format 'YYYY-MM'");
  }

  const dbMonthRegExp = new RegExp(`^${month}`);

  const tasks = await Task.find(
    {
      date: { $regex: dbMonthRegExp, $options: "i" },
      owner: user._id,
    },
    "-owner -createdAt -updatedAt"
  );

  // if (!tasks.length) {
  //   throw HttpError(404, "No tasks found");
  // }

  res.status(200).json({
    code: 200,
    message: `Tasks for ${month}`,
    data: tasks,
  });
};

module.exports = getTasksByMonth;
