import TranscriptsDAO from "../dao/transcriptsDAO.js";
import TextTranscriptsDAO from "../dao/textTranscriptsDAO.js";
import voiceflowAPI from "../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../helpers/transcriptDataFormatter.js";
import {TranscriptInterface} from "../interfaces/transcript-interface.js";
import {TextTranscriptsInterface} from "../interfaces/textTranscripts-interface.js";
import {InputBoundaryInterface} from "../interfaces/input-boundary-interface.js";
let api_key
let project_id
export default class TranscriptService extends InputBoundaryInterface{

  /**
   * Receives a json file from the voiceflow api call
   * @param textDAO
   * @param transcriptDAO
   * @param {String} api_key : contains the current api key
   * @param {String} project_id : contains the current project id
   */
    async getVoiceFlowAPIData(textDAO, transcriptDAO) {
    try {
      console.log(api_key);
      console.log(project_id);
      const response = await voiceflowAPI.getData(api_key, project_id);
      await this.addTranscripts(textDAO, transcriptDAO, response);
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of as well as
   * parsed transcripts to Mongo DB
   * @param textDAO
   * @param transcriptDAO
   * @param {String} project_id : contains the current project id
   * @param {Object} response : json format of the VoiceFlow API call
   */
   async addTranscripts(textDAO, transcriptDAO, response) {
    try {
      for (const transcript of response.data) {

        if (transcriptDAO instanceof TranscriptInterface) {
          const parsedData = transcriptDataFormatter.cleanData(transcript);
          const ReviewResponse = await transcriptDAO.addTranscript(
              project_id,
              parsedData
          );
        } else {
          new Error("not an ParsedTranscript Interface");
        }

        if (textDAO instanceof TextTranscriptsInterface) {
        const formattedTranscript =
          transcriptDataFormatter.cleanTextTranscript(transcript);
        const res = await textDAO.addTextTranscript(
          project_id,
          formattedTranscript
        );
        } else {
          new Error("not an TextTranscript Interface");
        }
      }
      res.json({ status: "success" });
    } catch (e) {
      return { status: "failure" };
    }
  }
  /**
   * Query's the database for parsed transcripts with a specific project id
   * @param dao
   * @param req
   * @param res json format of the response of the function
   */
  static async getFilteredTranscripts(dao, query) {
    if (dao instanceof TranscriptInterface) {
    try{
      let filters={};
      if (query) {
        if (query.project_id) {
          filters = {project_name: {$eq: query.project_name}};
        } else if (query.project_id) {
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
      return {
        status: response.status,
        data: data,
      };
    }catch(e){
      return {
        status: 500,
        data: { error: e.message },
      };
    }
    } else {
      new Error("not an ParsedTranscript Interface");
    }
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param dao
   * @param {String} project_id : Contains the current project id
   * @param res json format of the response of the function
   */
  static async getFilteredTextTranscripts(dao, query) {
    if (dao instanceof TextTranscriptsInterface) {
      try {
        let filters = {};
        if (query) {
          if (query.project_id) {
            filters = {project_name: {$eq: query.project_name}};
          }
        }

      const response = await this.#TextTranscriptsDAO.getTextTranscripts({
        filters,
      });

      let data = {
        transcripts: response.data,
        filters: filters,
      };
      return {
        status: response.status,
        data: data,
      };
    }catch(e){
      return {
        status: 500,
        data: { error: e.message },
      };
    }
    } else {
      throw new Error("not an TextTranscript Interface");
    }

  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param dao
   * @param {String} collection_name :  name of the collection wished to drop
   * @param res json format of the response of the function
   */
   async flushCollection(dao, collection_name, res) {
    try {
      if (collection_name === "Parsed") {
        await TranscriptsDAO.flushDatabase();
      }
      if (collection_name === "Text") {
        await TextTranscriptsDAO.flushDatabase();
      }
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  }

  async saveKeys(req){
    api_key = req.body[0]
    project_id = req.body[1]
    console.log('services: ' + api_key + ', ' + project_id)
  }

}

