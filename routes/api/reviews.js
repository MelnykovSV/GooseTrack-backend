const express = require("express");
const ctrl = require("../../controllers/reviews");
const { authenticate, validateBody } = require("../../middlewares/");
const { schemas } = require("../../models/review");
const router = express.Router();

router.get("/", ctrl.getAllReviews);
router.get("/own", authenticate, ctrl.getUserReviews);
router.post(
  "/own",
  authenticate,
  validateBody(schemas.addReviewSchema),
  ctrl.addReview
);
router.patch(
  "/own",
  authenticate,
  validateBody(schemas.updateReviewSchema),
  ctrl.updateUserReviews
);
router.delete("/own", authenticate, ctrl.deleteUserReviews);

module.exports = router;
