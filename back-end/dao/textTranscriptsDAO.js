import { TextTranscripts } from "../schema/textTranscripts-schema.js";
import {TextTranscriptsInterface} from "../interfaces/textTranscripts-interface.js";

export default class TextTranscriptsDAO extends TextTranscriptsInterface{
  /**
   * Get an array of all the text transcripts in MongoDB
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
   * Add a text transcript object into the database
   * @returns
   * @param projectId
   * @param dialogue
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
   * @return {Promise<void>}
   */
  async flushCollection(project_id) {
    await TextTranscripts.deleteMany({project_id: `${project_id}`});
  }
}
