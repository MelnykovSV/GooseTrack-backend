const express = require("express");
const ctrl = require("../../controllers/reviews");
const auth = require("../../middlewares/authenticate");

const router = express.Router();

router.get("/", ctrl.getAllReviews);
router.get("/own", auth, ctrl.getUserReviews);
router.post("/own", auth, ctrl.addReview);
router.patch("/own", auth, ctrl.updateUserReviews);
router.delete("/own", auth, ctrl.deleteUserReviews);

module.exports = router;
