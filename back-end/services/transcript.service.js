import TranscriptsDAO from "../dao/transcriptsDAO.js";
import TextTranscriptsDAO from "../dao/textTranscriptsDAO.js";
import voiceflowAPI from "../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../helpers/transcriptDataFormatter.js";
export default class TranscriptService {
  static #TranscriptsDAO = new TranscriptsDAO();
  static #TextTranscriptsDAO = new TextTranscriptsDAO();
  /**
   * Receives a json file from the voiceflow api call
   * @param {String} api_key : contains the current api key
   * @param {String} project_id : contains the current project id
   */
  static async getVoiceFlowAPIData(api_key, project_id) {
    try {
      console.log(api_key);
      console.log(project_id);
      const response = await voiceflowAPI.getData(api_key, project_id);
      await this.addTranscripts(project_id, response);
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of as well as
   * parsed transcripts to Mongo DB
   * @param {String} project_id : contains the current project id
   * @param {Object} response : json format of the VoiceFlow API call
   */
  static async addTranscripts(project_id, response) {
    try {
      for (const transcript of response.data) {
        const parsedData = transcriptDataFormatter.cleanData(transcript);
        const ReviewResponse = await this.#TranscriptsDAO.addTranscript(
          project_id,
          parsedData
        );

        const formattedTranscript =
          transcriptDataFormatter.cleanTextTranscript(transcript);
        const res = await this.#TextTranscriptsDAO.addTextTranscript(
          project_id,
          formattedTranscript
        );
      }
      res.json({ status: "success" });
    } catch (e) {
      return { status: "failure" };
    }
  }
  /**
   * Query's the database for parsed transcripts with a specific project id
   * @param {String} project_id : Contains the current project id
   * @param res json format of the response of the function
   */
  static async queryForParsedTranscripts(project_id, res) {
    let filters = {};
    filters.project_id = project_id;

    const transcriptsList = await this.#TranscriptsDAO.getTranscripts({
      filters,
    });

    let response = {
      transcripts: transcriptsList,
      filters: filters,
    };
    res.json(response);
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param {String} project_id : Contains the current project id
   * @param res json format of the response of the function
   */
  static async queryForTrimmedTranscripts(project_id, res) {
    let filters = {};
    filters.project_id = project_id;

    const transcriptsList = await this.#TextTranscriptsDAO.getTextTranscripts({
      filters,
    });

    let response = {
      transcripts: transcriptsList,
      filters: filters,
    };
    res.json(response);
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param {String} collection_name :  name of the collection wished to drop
   * @param res json format of the response of the function
   */
  static async flushCollection(collection_name, res) {
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
}

