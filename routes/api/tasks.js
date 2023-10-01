const express = require("express");
const router = express.Router();
const { authenticate, validateBody } = require("./../../middlewares/index");
const {
  createTaskJoiSchema,
  updateTaskJoiSchema,
} = require("./../../models/task");

const {
  createTask,
  updateTask,
  deleteTask,
  getTasksByDay,
  getTasksByMonth,
} = require("./../../controllers/tasks");

router.post("/", authenticate, validateBody(createTaskJoiSchema), createTask);
router.get(
  "/getByDay/:day",
  authenticate,
  getTasksByDay
  //   validateBody(createTaskJoiSchema),
);
router.get(
  "/getByMonth/:month",
  authenticate,
  getTasksByMonth
  //   validateBody(createTaskJoiSchema),
);
router.patch(
  "/:taskId",
  authenticate,
  validateBody(updateTaskJoiSchema),
  updateTask
);
router.delete("/:taskId", authenticate, deleteTask);

module.exports = router;
