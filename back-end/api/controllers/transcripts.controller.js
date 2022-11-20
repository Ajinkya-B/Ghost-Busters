import TranscriptService from "../../services/transcript.service.js";
let api_key
let project_id


export default class TranscriptsController {

  /** GET API: Gets parsed transcript data matching with the querry from MongoDB.
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getParsedTranscripts(req, res, next) {
      await TranscriptService.queryForParsedTranscripts(req.query.project_id, res)
  }

  /** GET API: Gets trimmed transcript data matching with the querry from MongoDB.
   * Trimmed transcripts are composed of an object with the speaker followed by the text
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async getTrimmedTranscripts(req, res, next) {
    await TranscriptService.queryForTrimmedTranscripts(req.query.project_id, res)
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async addClean(req, res, next) {
    try {
      await TranscriptService.getVoiceFlowAPIData(api_key, project_id)
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }

  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async flushDB(req, res, next) {
    await TranscriptService.flushCollection(req.query.collection, res)
  }

  static async storeVales(req, res, next){
    api_key = req.body[0]
    project_id = req.body[1]
    res.json([api_key, project_id])
  }

  // static async getValues(req, res, next){
  //   res.json([api_key, project_id])
  //
  // }

}