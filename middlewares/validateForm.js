const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  end: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .greater(Joi.ref("start")),
  priority: Joi.string().valid("low", "medium", "high").required(),
  date: Joi.string().isoDate().required(),
  category: Joi.string().valid("to-do", "in-progress", "done").required(),
});

module.exports = { taskSchema };
