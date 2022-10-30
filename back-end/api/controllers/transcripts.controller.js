import TranscriptsDAO from "../../dao/transcriptsDAO.js";
import TextTranscriptsDAO from "../../dao/textTranscriptsDAO.js";
import voiceflowAPI from "../../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../../helpers/transcriptDataFormatter.js";

export default class TranscriptsController {
  /** GET API: Gets transcript data matching with the querry from MongoDB.
   * POST API: Sends all the transcripts saved under a project in Voiceflow to Mongo DB
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiGetTranscripts(req, res, next) {
    let filters = {};
    if (req.query.project_id) {
      filters.project_id = req.query.project_id;
    }

    const transcriptsList = await TranscriptsDAO.getTranscripts({
      filters,
    });

    let response = {
      transcripts: transcriptsList,
      filters: filters,
    };
    res.json(response);
  }

  // TODO 2(AJ): Change from POST -> PUT (so there are no duplicates)
  /**
   * POST API: Adds all the transcripts saved under a project in Voiceflow to Mongo DB
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async apiPostTranscripts(req, res, next) {
    try {
      // Get transcript data for a project given the API KEY and VERSION ID.
      const response = await voiceflowAPI.getData(
        process.env.VOICEFLOW_API_KEY,
        process.env.VOICEFLOW_VERSION
      );
      response.data.forEach(async function (transcript) {
        const projectId = transcript[0].projectID;
        const transcriptData = transcriptDataFormatter.cleanData(transcript);

        const ReviewResponse = await TranscriptsDAO.addTranscript(
          projectId,
          transcriptData
        );
      });

      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  }

  static async getTrim(req, res, next) {
    const response = await TextTranscriptsDAO.getTextTranscripts({});
    res.json(response)
  }

  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
   * @param {Object} req : contains additonal body passed to an API call
   * @param {Object} res : json object that is returned after making an API call
   * @param {Object} next
   */
  static async addClean(req, res, next) {
    try {
      const response = await voiceflowAPI.getData(
        process.env.VOICEFLOW_API_KEY,
        process.env.VOICEFLOW_VERSION
      );

      response.data.forEach(async function (transcript) {
        const projectId = transcript[0].projectID;
        const formattedTranscript =
          await transcriptDataFormatter.cleanTextTranscript(transcript);
        const res = await TextTranscriptsDAO.addTextTranscript(
          projectId,
          formattedTranscript
        );
      });
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  }

  // POST API:
  static async createProject(req, res, next) {
    console.log(req.body);
    await TranscriptsDAO.createProject(req.body);
    console.log("Project Created");
  }

  static async flushDB(req, res, next) {
    await TranscriptsDAO.flushDatabase("Trimmed");
    await TranscriptsDAO.flushDatabase("Raw");
    console.log("Database Flushed");
  }

  static async dropDB(db) {
    db.dropDatabase();
  }
}
