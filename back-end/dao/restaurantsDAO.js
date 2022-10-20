import mongodb from "mongodb"

let restaurants
let transcripts

export default class RestaurantsDAO {

    // An async method that initially connects to our database when our server starts
  static async injectDB(conn) {
    if (restaurants) {
      return
    }
    if (transcripts) {
      return
    }
    try {
        // This let's you connect to a specific database and a specific collection in that database
      restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
      transcripts = await conn.db(process.env.RESTREVIEWS_NS).collection("transcripts")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`,
      )
    }
  }


  // A fucntion to get a list of all restaurants and the number of restaurants
  static async getRestaurants({
    filters = null,
    page = 0,
    restaurantsPerPage = 20,
  } = {}) 
  {
    let query
    // Filter algo for the database with 3 different queries
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      } else if ("cuisine" in filters) {
        query = { "cuisine": { $eq: filters["cuisine"] } }
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }

    let cursor
    
    try {
      cursor = await restaurants
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }

    // Limit the data in cursor by using cursor.limit
    const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)

    try {
        // gets the data into an array
      const restaurantsList = await displayCursor.toArray()
      const totalNumRestaurants = await restaurants.countDocuments(query)

      return { restaurantsList, totalNumRestaurants }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }
  }

// A function to add a restaurant to the DB
  static async addTranscript(projectId, transcriptData) { 
    try {
      const transcriptDoc = { 
        project_id: projectId,
        transcript_data: transcriptData
      }

      return await transcripts.insertOne(transcriptDoc)
    } catch (e) {
      console.error(`Unable to post transcripts: ${e}`)
      return { error: e }
    }
  }
}