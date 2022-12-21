const express = require("express");

const reviewController = require("../controllers/review.controller");
//Review routes

const router = express.Router();

//Creating a review
router.post("/", reviewController.createReview);

//get all reviews
router.get("/", reviewController.getAllReviews);

//get single user review
router.get("/:userReviewId", reviewController.getSingleUserReview);

//updated review for see if we display or not
router.put("/:id", reviewController.updateReview);

//delete a specific review
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
