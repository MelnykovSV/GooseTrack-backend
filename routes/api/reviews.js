const express = require("express");
const ctrl = require("../../controllers/reviews");
const { authenticate } = require("../../middlewares/");

const router = express.Router();

router.get("/", ctrl.getAllReviews);
router.get("/userReview", authenticate, ctrl.getUserReviews);
router.post("/userReview", authenticate, ctrl.addReview);
router.patch("/userReview", authenticate, ctrl.updateUserReviews);
router.delete("/userReview", authenticate, ctrl.deleteUserReviews);

module.exports = router;
