const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer=require("multer");
const {storage} = require("../cloudConfig.js");
const upload=multer({storage})

router
    .route("/")
    .get(listingController.index)
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, listingController.createListing);


//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Search Route - Must be before /:id to avoid matching "search" as an id
router.get("/search", listingController.searchListings);

router
    .route("/:id")
    .get(listingController.showListing)
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, listingController.updateListing)
    .delete(isLoggedIn, isOwner, listingController.destroyListing);

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, listingController.renderEditForm);

module.exports = router;
