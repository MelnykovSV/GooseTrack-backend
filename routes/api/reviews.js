const express = require("express");
const ctrl = require("../../controllers/reviews");
const auth = require("../../middlewares/authenticate");

const router = express.Router();

router.get("/", ctrl.getAllReviews);
router.get("/userReview", auth, ctrl.getUserReviews);
router.post("/userReview", auth, ctrl.addReview);
router.patch("/userReview", auth, ctrl.updateUserReviews);
router.delete("/userReview", auth, ctrl.deleteUserReviews);

module.exports = router;
