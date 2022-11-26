import {MongoClient} from "mongodb";
import { Transcripts } from "../schema/transcripts-schema.js";

let transcripts

export default class TranscriptsDAO {

  /**
   * Get a list of all transcripts and the number of transcripts from database
   * @param filters : A object full of querry filters that you can apply when you get the data
   * @returns : A list of talk steps for a transcript
   */
  async getTranscripts({
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
      return await Transcripts.find(query);
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

      return await Transcripts.create(transcriptDoc)
    } catch (e) {
      console.error(`Unable to post transcripts: ${e}`)
      return { error: e }
    }
  }

  //A function to clear the database with the given name
  static async flushDatabase(){
    await Transcripts.deleteMany({})
  }

}