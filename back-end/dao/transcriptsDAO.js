import { Transcripts } from "../schema/transcripts-schema.js";
import {TranscriptInterface} from "../interfaces/transcript-interface.js";

// Extends the TextTranscriptInterface, for all operations the correct Data Access Object Interface
// must be used when a call to this DAO is made
export default class TranscriptsDAO extends TranscriptInterface{

  /**
   * Get a list of all transcripts and the number of transcripts from database
   * @param query : object full of query filters that you can apply when you get the data
   * @returns : A list of talk steps for a transcript
   */
  async getTranscripts(query) {
    try {
      const transcriptList = await Transcripts.find(query);
      return {
        status: 200,
        data: transcriptList,
      };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return {
        status: 500,
        data: { error: e.message },
      };
    }
  }


  /**
   * Add a single transcript to database
   * @param {String} projectId : Project id associated with a transcipt
   * @param {Array} transcriptData : Transcript conversation data
   * @returns 
   */
  async addTranscript(projectId, transcriptData) {
    try {
      const transcriptDoc = { 
        project_id: projectId,
        transcript_data: transcriptData
      }

      return await Transcripts.create(transcriptDoc);
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`);
      return { error: e }
    }
  }

  /**
   * FLush a collection from the database
   * @param {String} project_id : Project id associated with a transcipt
   * @returns
   */
  async flushCollection(project_id){
    await Transcripts.deleteMany({project_id: `${project_id}`})
  }

}