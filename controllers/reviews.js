const Listing=require("../models/listing");
const review = require("../models/review");
const Review=require("../models/review");

module.exports.showTrending = async (req, res) => {
    // Get all listings with their reviews populated
    let allListings = await Listing.find({}).populate("reviews");
    
    // Filter listings based on average rating
    let trendingListings = allListings.filter(listing => {
        if (listing.reviews.length === 0) return false;
        
        // Calculate average rating for this listing
        let totalRating = listing.reviews.reduce((sum, review) => sum + review.rating, 0);
        let averageRating = totalRating / listing.reviews.length;
        
        // Return listings with average rating > 3
        return averageRating > 3;
    });
    
    // Sort by average rating (highest first)
    trendingListings.sort((a, b) => {
        let avgA = a.reviews.reduce((sum, r) => sum + r.rating, 0) / a.reviews.length;
        let avgB = b.reviews.reduce((sum, r) => sum + r.rating, 0) / b.reviews.length;
        return avgB - avgA;
    });
    
    res.render("listings/index.ejs", { listings: trendingListings, category: null });
}

module.exports.createReview = async (req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author=req.user._id;
    
    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing.id}`);
};

module.exports.destroyReview = async (req, res)=>{
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};