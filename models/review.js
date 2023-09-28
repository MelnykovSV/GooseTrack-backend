const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const reviewSchema = Schema(
  {
    rating: {
      type: Number,
      required: [true, "Set number of rating stars"],
      min: 0,
      max: 5,
      default: 0,
    },
    comment: {
      type: String,
      required: [true, "Add review"],
      default: "",
      description: "Review",
    },
    userName: {
      type: String,
      description: "Name of reviewer",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

reviewSchema.post("save", handleMongooseError);

const addReviewSchema = Joi.object({
  rating: Joi.number().required(),
  comment: Joi.string().required(),
});

const updateReviewSchema = Joi.object({
  rating: Joi.number()
    .min(0)
    .max(5)
    .integer()
    .required()
    .error(new Error("missing required review text field")),

  comment: Joi.string()
    .required()
    .error(new Error("missing required review text field")),
});

const schemas = { addReviewSchema, updateReviewSchema };

const Review = model("review", reviewSchema);

module.exports = { Review, schemas };
