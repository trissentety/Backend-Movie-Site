import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()


//router.route("/").get((req, res) => res.send("hello world"))
router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id") //param
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router 