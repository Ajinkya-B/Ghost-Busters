import TranscriptService from "../../services/transcript.service.js";
let api_key
let project_id


export default class TranscriptsController {

  /** GET API: Gets parsed transcript data matching with the querry from MongoDB.
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiGetCleanedTranscripts(req, res, next) {
    try{
      const getCleanedTranscriptsResponse = await TranscriptService.getFilteredTranscripts(req.query);
      res
        .status(getCleanedTranscriptsResponse.status)
        .json(getCleanedTranscriptsResponse.data);
    }catch(e){
      res.status(500).json({error: e.message});
    }
      
  }

  /** GET API: Gets trimmed transcript data matching with the querry from MongoDB.
   * Trimmed transcripts are composed of an object with the speaker followed by the text
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiGetTextTranscripts(req, res, next) {
    try {
      const getTextTranscriptsResponse = await TranscriptService.getFilteredTextTranscripts(req.query);
      res
        .status(getTextTranscriptsResponse.status)
        .json(getTextTranscriptsResponse.data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
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

}