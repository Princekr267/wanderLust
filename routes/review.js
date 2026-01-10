const express=require("express");
const router=express.Router({mergeParams: true});
// const wrapAsync=require("../utils/wrapAsync.js");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

router.get("/trending", reviewController.showTrending)

// Reviews post route
router.post("/", isLoggedIn, validateReview, reviewController.createReview); 

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, reviewController.destroyReview);

module.exports=router;