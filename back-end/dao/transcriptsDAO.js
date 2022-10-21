let transcripts

export default class TranscriptsDAO {

    // An async method that initially connects to our database when our server starts
  static async injectDB(conn) {
    if (transcripts) {
      return
    }
    try {
        // Connect to a specific database and a specific collection in that database
      transcripts = await conn.db(process.env.RESTREVIEWS_NS).collection("transcripts")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in transcriptsDAO: ${e}`,
      )
    }
  }



  // A fucntion to get a list of all transcripts and the number of transcripts
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

// A function to add a transcript to the DB
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