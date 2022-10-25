import {MongoClient} from "mongodb";

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



  // A function to get a list of all transcripts and the number of transcripts
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

  // A function to add an unedited transcript into the database
  static async addRawTranscript(transcripts){
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("VoiceFlowAPIData")

    try {
      await dbo.collection("Raw").insertMany(transcripts);
    } catch (e) {
      console.error(`Unable to post transcripts: ${e}`)
      return { error: e }
    }
  }

  // A function to add a transcript object into the database, with text and who says it
  static async addTrimmedTranscript(transcriptObject){
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("VoiceFlowAPIData")

    try {
      await dbo.collection("Trimmed").insertOne(transcriptObject);
    } catch (e) {
      console.error(`Unable to post transcripts: ${e}`)
      return { error: e }
    }
  }

  //A function to clear the database with the given name
  static async flushDatabase(name){
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("VoiceFlowAPIData")
    await dbo.collection(name).deleteMany({})
  }

  //A function to get the trimmed transcripts
  static async getTrimmedTranscripts() {
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("VoiceFlowAPIData")
    return await dbo.collection("Trimmed").find().toArray()
  }

  // Creates a project in mongoDB with two fields project name and project id
  static async createProject(req, res, next){
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("ProjectsDB")
    await dbo.collection("Projects").insertOne(req)
  }

}