import { TextTranscripts } from "../schema/textTranscripts-schema.js";
import {TextTranscriptsInterface} from "../interfaces/textTranscripts-interface.js";

// Extends the TextTranscriptInterface, for all operations the correct Data Access Object Interface
// must be used when a call to this DAO is made
export default class TextTranscriptsDAO extends TextTranscriptsInterface{
  /**
   * Get an array of all the text transcripts in MongoDB
   * @param query : object full of query filters that you can apply when you get the data
   * @returns Array of all the text transcripts from the database
   */
  async getTextTranscripts(query) {
    try {
      const transcriptList = await TextTranscripts.find(query);
      return {
        status: 200,
        data: transcriptList,
      };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return {
        status: 500,
        data: { error: e.message },
      };
    }
  }

  /**
   * Add a single transcript to database
   * @param {String} projectId : Project id associated with a transcript
   * @param {Array} dialogue : Transcript conversation data
   * @returns
   */
  async addTextTranscript(projectId, dialogue) {
    try {
      const transcriptDoc = {
        project_id: projectId,
        dialogue: dialogue,
      };
      return TextTranscripts.create(transcriptDoc);
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`);
      return { error: e };
    }
  }

  /**
   * Deletes the objects in the textTranscripts collection
   * @param {String} project_id : Project id associated with a transcript
   * @return {Promise<void>}
   */
  async flushCollection(project_id) {
    await TextTranscripts.deleteMany({project_id: `${project_id}`});
  }
}
