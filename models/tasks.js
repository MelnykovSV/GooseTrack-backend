// Схема для місячного перегляду
const monthlyTaskSchema = {
  title: {
    type: String,
    required: true,
    maxlength: 250,
  },
  month: {
    type: String,
    required: true,
  },
};

// Схема для денного перегляду
const dailyTaskSchema = {
  title: {
    type: String,
    required: true,
    maxlength: 250,
  },
  date: {
    type: Date,
    required: true,
  },
};

module.exports = {
  monthlyTaskSchema,
  dailyTaskSchema,
};
