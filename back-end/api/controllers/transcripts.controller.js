import TranscriptsDAO from "../../dao/transcriptsDAO.js"
import axios from "axios";
import {MongoClient} from "mongodb";
import fetch from 'node-fetch';

class transcript {

  constructor(text, speaker) {
    this.text = text;
    this.speaker = speaker;
  }
}

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

  static async dropDB(db){
      db.dropDatabase();
  }

  // Function that adds the questions and text to the database
  static async addClean(req, res, next){

    //Creates a database object
    const client = new MongoClient(process.env.MONGO_DB_URI);
    const dbo = client.db("VoiceFlowAPIData")

    const response = await fetch(process.env.VOICEFLOW_API_LINK);

    const myJson = await response.json();
    let tempBotChat = [];

    for (let i = 0; i < myJson.length; i++) {
      for (let x = 0; x < myJson[i].length; x++) {
        try {
          if (myJson[i][x].payload.payload.message !== undefined) {
            var question = String(myJson[i][x].payload.payload.message);

            if (!question.includes("audio")) {
              // console.log(
              //   question.substring(
              //     question.indexOf(">") + 1,
              //     question.lastIndexOf("<")
              //   )
              // );
              tempBotChat.push(
                  question.substring(
                      question.indexOf(">") + 1,
                      question.lastIndexOf("<")
                  )
              );
            }
          }
          if (myJson[i][x].payload.payload.query !== undefined) {
            var answer = String(myJson[i][x].payload.payload.query);
            let tempBotObject = new transcript(tempBotChat, "bot");
            await TranscriptsDAO.addTrimmedTranscript(tempBotObject);
            console.log(tempBotObject);
            tempBotChat = [];
            let tempHumanObject = new transcript(answer, "human");
            await TranscriptsDAO.addTrimmedTranscript(tempHumanObject);
            console.log(tempHumanObject);
          }
        } catch (err) {}
      }
    }

  }

  static async addRaw(req, res, next){

    const response = await fetch(process.env.VOICEFLOW_API_LINK);
    const myJson = await response.json();

      for(let x = 0; x < myJson.length; x++){
        await TranscriptsDAO.addRawTranscript(myJson[x]);
      }
  }

  static async flushDB(req, res, next){
    await TranscriptsDAO.flushDatabase('Trimmed');
    await TranscriptsDAO.flushDatabase('Raw');
  }

  static async getTrim(req, res, next){
    let response =  await TranscriptsDAO.getTrimmedTranscripts()
    console.log(response);

  }

  static async createProject(req, res, next){
    console.log(req.body)
    await TranscriptsDAO.createProject(req.body);
  }

}