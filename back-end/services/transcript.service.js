import voiceflowAPI from "../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../helpers/transcriptDataFormatter.js";
import {TranscriptInterface} from "../interfaces/transcript-interface.js";
import {TextTranscriptsInterface} from "../interfaces/textTranscripts-interface.js";
import {InputBoundaryInterface} from "../interfaces/input-boundary-interface.js";

// Both of these variables are defined to save the temporary state of the project selected
let api_key
let project_id
export default class TranscriptService extends InputBoundaryInterface{

  /**
   * Receives a json file from the voiceflow api call
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param textDAO Instance of DAO which the parsed transcripts must be added too
   * @param transcriptDAO Instance of DAO which the text transcripts must be added too
   */
  async getVoiceFlowAPIData(outputBoundary, textDAO, transcriptDAO) {
    try {
      const rawData = await voiceflowAPI.getData(api_key, project_id);
      const response = await this.addTranscripts(textDAO, transcriptDAO, rawData);
      outputBoundary.setOutput({
        status: response.status,
        data: response.data,
      });
    } catch (e) {
        outputBoundary.setOutput({
          status: 500,
          data: {error: e.message}
        });
    }
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of as well as
   * parsed transcripts to Mongo DB
   * @param textDAO Instance of DAO which the parsed transcripts must be added too
   * @param transcriptDAO Instance of DAO which the text transcripts must be added too
   * @param response response from the voiceflow api call which contains a json object of all transcripts
   */
   async addTranscripts(textDAO, transcriptDAO, response) {
    try {
      await this.flushCollection(textDAO, project_id)
      await this.flushCollection(transcriptDAO, project_id)
      for (const transcript of response.data){
        if (transcriptDAO instanceof TranscriptInterface) {
          const parsedData = transcriptDataFormatter.cleanData(transcript);
          await transcriptDAO.addTranscript(
            project_id,
            parsedData
          );
        } else {
          new Error("not an ParsedTranscript Interface");
        }

        if (textDAO instanceof TextTranscriptsInterface) {
          const formattedTranscript = transcriptDataFormatter.cleanTextTranscript(transcript);
          await textDAO.addTextTranscript(
            project_id,
            formattedTranscript
          );
        } else {
          new Error("not an TextTranscript Interface");
        }
      }
      return {
        status: 200,
        data: "successfully added transcripts",
      };
    } catch (e) {
      return {
        status: 500,
        data: e.message
      }
    }
  }
  /**
   * Query's the database for parsed transcripts with a specific project id
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance where the database operations are preformed on
   * @param query parameter which looks for a specific body in the database
   */
   async getFilteredTranscripts(outputBoundary, dao, query) {
    if (dao instanceof TranscriptInterface) {
    try{
      let filters={};
      if (query) {
        if (query.project_id) {
          filters = {project_id: {$eq: query.project_id}};
        }
      }

      const response = await dao.getTranscripts({
        filters,
      });

      let data = {
        transcripts: response.data,
        filters: filters,
      };
      outputBoundary.setOutput({
        status: response.status,
        data: data,
      });
    }catch(e){
      outputBoundary.setOutput({
        status: 500,
        data: { error: e.message },
      });
    }
    } else {
      new Error("not an ParsedTranscript Interface");
    }
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of the Data access object where the collection will be querryed
   * @param query A project id to query the database with
   */
   async getFilteredTextTranscripts(outputBoundary, dao, query) {
    if (dao instanceof TextTranscriptsInterface) {
      try {
        let filters = {};
        if (query) {
          if (query.project_id) {
            filters = {project_id: {$eq: query.project_id}};
          }
        }

      const response = await dao.getTextTranscripts({
        filters,
      });

      let data = {
        transcripts: response.data,
        filters: filters,
      };
      outputBoundary.setOutput({
        status: response.status,
        data: data,
      });
    }catch(e){
        outputBoundary.setOutput({
        status: 500,
        data: { error: e.message },
      });
    }
    } else {
      throw new Error("not an TextTranscript Interface");
    }

  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param dao Instance of the Data access object where the collection will be querryed
   * @param project_id the current project id which is selected
   */
   async flushCollection(dao, project_id) {
    try {
      await dao.flushCollection(project_id)
    } catch (e) {
        console.log("Error in flushing collection")
    }
  }
    /**
     * Stores the current project_id and API key for the current state
     * @param req contains data of the current state from the front end
     */
    async saveKeys(req){
    api_key = req.body[0]
    project_id = req.body[1]
  }

}

