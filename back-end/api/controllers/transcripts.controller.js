import TranscriptService from "../../services/transcript.service.js";
import {InputBoundaryInterface} from "../../interfaces/input-boundary-interface.js";

export default class TranscriptsController {

  static #inputBoundary

  static setTranscriptInteractor(interactor) {
    if(interactor instanceof InputBoundaryInterface){
      this.#inputBoundary = interactor;
    } else {
      throw new Error("not an InputBoundary");
    }
  }

  /** GET API: Gets parsed transcript data matching with the querry from MongoDB.
   * @param dao
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getParsedTranscripts(dao, req, res, next) {
      await this.#inputBoundary.queryForParsedTranscripts(dao, req, res)
  }

  /** GET API: Gets trimmed transcript data matching with the querry from MongoDB.
   * Trimmed transcripts are composed of an object with the speaker followed by the text
   * @param dao
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getTrimmedTranscripts(dao, req, res, next) {
    await this.#inputBoundary.queryForTrimmedTranscripts(dao, req.query.project_id, res)
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param textDAO
   * @param transcriptDAO
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async addTranscripts(textDAO, transcriptDAO, req, res, next) {
    try {
      await this.#inputBoundary.getVoiceFlowAPIData(textDAO, transcriptDAO)
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }

  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param dao
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  //Come back to this function, deciding whether to add the dao as an if condition or just leave it
  static async flushDB(dao, req, res, next) {
    await this.#inputBoundary.flushCollection(dao, req.query.collection, res)

  }

  /**
   * @param req
   * @return {Promise<void>}
   */
  static async storeVales(req){
    try {
      await this.#inputBoundary.saveKeys(req)
    } catch (e) {
      console.log("Error in saving keys")
    }

  }


}