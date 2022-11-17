import {MongoClient} from "mongodb";

let transcripts

export default class TranscriptsDAO {

  /**
   * Sets up an initial connection with MongoDB and store sit onto a variable named transcripts
   * @param conn : mongo client for the database URI
   * @returns : throws an error if the conenction is nto estabilshed
   */
  static async injectDB(conn) {
    if (transcripts) {
      return
    }
    try {
        // Connect to a specific database and a specific collection in that database
      transcripts = await conn.db("VoiceFlowAPIData").collection("Parsed")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in transcriptsDAO: ${e}`,
      )
    }
  }


  /**
   * Get a list of all transcripts and the number of transcripts from database
   * @param filters : A object full of querry filters that you can apply when you get the data
   * @returns : A list of talk steps for a transcript
   */
  static async getTranscripts({
    filters = null
  } = {}) 
  {
    let query
    // Filter data from the database request
    if (filters) {
      if ("project_id" in filters) {
        query = { "project_id": { $eq: filters["project_id"] } }
      } 
    }

    let cursor
    
    try {
      cursor = await transcripts
        .find(query)
      return cursor.toArray()
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return []
    }
  }


  /**
   * Add a single transcript to database
   * @param {String} projectId : Project id associated with a transcipt
   * @param {Array} transcriptData : Transcript conversation data
   * @returns 
   */
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

  //A function to clear the database with the given name
  static async flushDatabase(name){
    await transcripts.deleteMany({})
  }



}