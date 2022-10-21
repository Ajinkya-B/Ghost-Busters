import TranscriptsDAO from "../../dao/transcriptsDAO.js"
import axios from "axios";

export default class TranscriptsController {
// A function that takes the querry and gets all the transcripts data from MongoDB.

  static async apiGetTranscripts(req, res, next) {

    let filters = {}
    if (req.query.project_id) {
      filters.project_id = req.query.project_id
    }

    const transcriptsList = await TranscriptsDAO.getTranscripts({
      filters,
    })

    let response = {
      transcripts: transcriptsList,
      filters: filters,
    }
    res.json(response)
  }

  static async apiPostTranscripts(req, res, next){
    // Retriving data on a project using Vioceflow API
    let response;
    try {
      response = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
    } catch (e) {
        console.log("Error in the Voiceflow API call!")
    }
    try{
      response.data.forEach(async function(transcript) {
        const projectId = transcript[0].projectID
        const transcriptData = transcript

        const ReviewResponse = await TranscriptsDAO.addTranscript(
          projectId,
          transcriptData,
        )
      });  
      
      res.json({ status: "success" })
    }catch(e){
      res.json({ status: "failure" })
    }
  }
  
}