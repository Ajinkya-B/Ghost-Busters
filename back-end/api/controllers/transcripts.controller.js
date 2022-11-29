import TranscriptService from "../../services/transcript.service.js";
import {TextTranscriptsInterface} from "../../interfaces/textTranscripts-interface.js"
import {TranscriptInterface} from "../../interfaces/transcript-interface.js";

let api_key
let project_id


export default class TranscriptsController {

  /** GET API: Gets parsed transcript data matching with the querry from MongoDB.
   * @param dao
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getParsedTranscripts(dao, req, res, next) {
      await TranscriptService.queryForParsedTranscripts(dao, req, res)
  }

  /** GET API: Gets trimmed transcript data matching with the querry from MongoDB.
   * Trimmed transcripts are composed of an object with the speaker followed by the text
   * @param dao
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getTrimmedTranscripts(dao, req, res, next) {
    await TranscriptService.queryForTrimmedTranscripts(dao, req.query.project_id, res)
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param textDAO
   * @param transcriptDAO
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async addClean(textDAO, transcriptDAO, req, res, next) {
    try {
      await TranscriptService.getVoiceFlowAPIData(textDAO, transcriptDAO, api_key, project_id)
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
    await TranscriptService.flushCollection(dao, req.query.collection, res)

  }

  static async storeVales(dao, req, res, next){
    api_key = req.body[0]
    project_id = req.body[1]
    res.json([api_key, project_id])
  }

  // static async getValues(req, res, next){
  //   res.json([api_key, project_id])
  //
  // }

}