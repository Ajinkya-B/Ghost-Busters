import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router()

// uses the controller to call a specific api
router.route("/")
    .get(RestaurantsCtrl.apiGetRestaurants)
    .post(RestaurantsCtrl.apiPostTranscripts)

export default router