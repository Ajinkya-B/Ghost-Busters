import {InputBoundaryInterface} from "../../interfaces/input-boundary-interface.js";

export default class TranscriptsController {

  //Setting the input boundary for an instance of the Transcript Controller
  static #inputBoundary

  /**
   * Checks to make sure the interactor being passed in from the route is a proper
   * InputBoundaryInterface
   * @param interactor should be an instance of TranscriptService
   */
  static setTranscriptInteractor(interactor) {
    if(interactor instanceof InputBoundaryInterface){
      this.#inputBoundary = interactor;
    } else {
      throw new Error("not an InputBoundary");
    }
  }

  //Sets the output boundary for an instance of the controller
  static #outputBoundary;

  /**
   * All the data coming out of the service layer is passed through the output boundary
   * which is set here
   * @param outputBoundary instance of outputBoundary
   */
  static setOutputBoundary(outputBoundary) {
    if(outputBoundary.isOutputBoundaryInterface){
      this.#outputBoundary = outputBoundary;
    } else {
      throw new Error("not an OutputBoundary");
    }
  }

  /** GET API: Gets parsed transcript data matching with the querry from MongoDB.
   * @param transcriptDAO : instance of transcriptDAO, when the db is queryed it uses a specific dao
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiGetCleanedTranscripts(transcriptDAO, req, res, next) {
    try{
      await this.#inputBoundary.getFilteredTranscripts(this.#outputBoundary, req.query);
      res
        .status(this.#outputBoundary.getOutput().status)
        .json(this.#outputBoundary.getOutput().data);
    }catch(e){
      res.status(500).json({error: e.message});
    }

  }

  /** GET API: Gets trimmed transcript data matching with the query from MongoDB.
   * Trimmed transcripts are composed of an object with the speaker followed by the text
   * @param textDAO: instance of textDAO, when the db is queryed it uses a specific dao
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiGetTextTranscripts(textDAO, req, res, next) {
    try {
      await this.#inputBoundary.getFilteredTextTranscripts(this.#outputBoundary, textDAO, req.query);
      res
        .status(this.#outputBoundary.getOutput().status)
        .json(this.#outputBoundary.getOutput().data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' which is composed
   * of just the text values of each transcript. 'Transcripts' are also added which contains parsed
   * versions of the transcripts with additional data to be analyzed
   * @param textDAO: instance of textDAO, when the text transcripts are added to the Mongo
   * @param transcriptDAO: instance of transcriptDAO, when the text transcripts are added to the Mongo
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async addTranscripts(textDAO, transcriptDAO, req, res, next) {
    try {
      await this.#inputBoundary.getVoiceFlowAPIData(this.#outputBoundary, textDAO, transcriptDAO)
      res
        .status(this.#outputBoundary.getOutput().status)
        .json(this.#outputBoundary.getOutput().data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }

  }

  /**
   * Flushes a collection from Mongo
   * @param dao: Flushes the collection to the respective DAO that is passed in
   * @param {Object} req : contains additional body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async flushDB(dao, req, res, next) {
    await this.#inputBoundary.flushCollection(dao, res)
  }

  /**
   * Stores the API key and the ProjectID of the currently selected project for use when
   * adding or flushing transcripts
   * @param req contains the value of the API key and the ProjectID
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