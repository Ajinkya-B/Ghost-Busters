import RestaurantsDAO from "../dao/restaurantsDAO.js"
import axios from "axios";

export default class RestaurantsController {
// A function that takes the querry and gets all the restaurnat data from MongoDB.
  static async apiGetRestaurants(req, res, next) {
    const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getRestaurants({
      filters,
      page,
      restaurantsPerPage,
    })

    let response = {
      restaurants: restaurantsList,
      page: page,
      filters: filters,
      entries_per_page: restaurantsPerPage,
      total_results: totalNumRestaurants,
    }
    res.json(response)
  }

  static async apiPostTranscripts(req, res, next){
    // let response;
    try {
      const response = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
      response.data.forEach(async function(transcript) {
        const projectId = transcript[0].projectID
        const transcriptData = transcript

        const ReviewResponse = await RestaurantsDAO.addTranscript(
          projectId,
          transcriptData,
        )
      });  
      
      res.json({ status: "success" })
      // console.log(response.data);
    } catch (error) {
        console.log("Error in the Voiceflow API call!!!")
    }
  }
  
}