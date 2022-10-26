import TranscriptsDAO from "../../dao/transcriptsDAO.js"
import voiceflowAPI from "../../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../../helpers/transcriptDataFormatter.js";
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

  // GET API: A function that gets transcript data matching with the querry from MongoDB.
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
  
  // POST API: sends all the transcripts saved in the Voiceflow to Mongo DB

  // TODO 1(AJ): Work on filtering the Vioceflow API data before sending it to Mongo
  // TODO 2(AJ): Change from POST -> PUT (so there are no duplicates)
  static async apiPostTranscripts(req, res, next){
    try{
      // Get transcript data for a project given the API KEY and VERSION ID.
      const response = await voiceflowAPI.getData(
        process.env.VOICEFLOW_API_KEY,
        process.env.VOICEFLOW_VERSION,
      );
      response.data.forEach(async function(transcript) {
        const projectId = transcript[0].projectID
        const transcriptData = transcriptDataFormatter.cleanData(transcript)

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

  // TODO 3(Marco): Is this a duplicate of the function above? 
  static async addRaw(req, res, next){
    try{
      const response = await voiceflowAPI.getData(
        process.env.VOICEFLOW_API_KEY,
        process.env.VOICEFLOW_VERSION,
      );
      response.forEach(async function(transcript){
        await TranscriptsDAO.addRawTranscript(transcript);
      })

      res.json({ status: "success" })
    }catch(e){
      res.json({ status: "failure" })
    }
    
  }

  static async dropDB(db){
      db.dropDatabase();
  }

  // Function that adds the questions and text to the database
  // TODO 3(Marco): Refractor this whole method:
  //                  1. Connect with the DB in a DAO file (eiter build it on top of transcripsDAO or 
  //                     create a new one(recommended))
  //                  2. The logic to 'clean' the data can go in the helpers folder
  // TODO 4(Anyone): Creata a different DAO for 'textTranscripts'. efer to issue #1 on github
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
    console.log("Trimmed Data added");
  }

  static async flushDB(req, res, next){
    await TranscriptsDAO.flushDatabase('Trimmed');
    await TranscriptsDAO.flushDatabase('Raw');
    console.log("Database Flushed");
  }

  static async getTrim(req, res, next){
    let itemsSoFar = []
    let response =  await TranscriptsDAO.getTrimmedTranscripts()
    for (let x = 0; x < response.length; x++){
      let tempObject = new transcript(response[x]["text"], response[x]["speaker"]);
      itemsSoFar.push(tempObject);
    }
    console.log(itemsSoFar)
    return itemsSoFar
  }

  // POST API: 
  static async createProject(req, res, next){
    console.log(req.body)
    await TranscriptsDAO.createProject(req.body);
    console.log("Project Created");
  }

}