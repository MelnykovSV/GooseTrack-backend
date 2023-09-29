const { taskSchema } = require("../../middlewares/validateForm");

const postTask = async (req, res, next) => {
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
};

module.exports = postTask;