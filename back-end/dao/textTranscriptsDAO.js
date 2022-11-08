let textTranscripts;

export default class TextTranscriptsDAO {
  /**
   * Sets up an initial connection with MongoDB and store sit onto a variable named textTranscripts
   * @param conn : mongo client for the database URI
   * @returns : throws an error if the conenction is nto estabilshed
   */
  static async injectDB(conn) {
    if (textTranscripts) {
      return;
    }
    try {
      // Connect to a specific database and a specific collection in that database
      textTranscripts = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("text_transcripts");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in textTranscriptsDAO: ${e}`
      );
    }
  }

  /**
   * Get an array of all the text transcripts in MongoDB
   * @returns Array of all the text transcripts from the database
   */
  static async getTextTranscripts() {
    try {
      return await textTranscripts.find().toArray();
    } catch (e) {
      return [];
    }
  }

  /**
   * Add a text transcript object into the database
   * @param {Array} transcriptObject : An array of objects containing a speaker and his text
   * @returns
   */
  static async addTextTranscript(projectId, dialogue) {
    try {
      const transcriptDoc = {
        project_id: projectId,
        dialogue: dialogue,
      };
      return textTranscripts.insertOne(transcriptDoc);
    } catch (e) {
      console.error(`Unable to post textTranscripts: ${e}`);
      return { error: e };
    }
  }
}
