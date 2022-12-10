import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import TextTranscriptDAO from "../../dao/textTranscriptsDAO.js";
import TranscriptDAO from "../../dao/transcriptsDAO.js"
import TranscriptService from "../../services/transcript.service.js";
const router = express.Router()
const textDao = new TextTranscriptDAO()
const transcriptDao = new TranscriptDAO()
const TranscriptServiceInteractor = new TranscriptService()
import OutputDataBoundary from "../../helpers/outputDataBoundary.js";

//Returns a query from the database for the parsed version of transcripts
router.route("/getParsedTranscripts")
    .get((req, res, next) => {
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.setOutputBoundary(OutputDataBoundary)
        TranscriptsCtrl.apiGetCleanedTranscripts(transcriptDao, req, res, next)
    })

//Returns a query from the database for the text version of transcripts
router.route("/getTrimmedTranscripts")
    .get((req, res, next) =>{
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.setOutputBoundary(OutputDataBoundary)
        TranscriptsCtrl.apiGetTextTranscripts(textDao, req, res, next)
    })

//Adds clean and parsed versions of transcripts to the database
router.route("/trimmed")
    .post((req, res, next) => {
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.setOutputBoundary(OutputDataBoundary)
        TranscriptsCtrl.addTranscripts(textDao, transcriptDao, req, res, next)
    })

//Flushes the database of a specific collection
router.route("/flush")
    .get((req, res, next) => {
        TranscriptsCtrl.flushDB(transcriptDao, req, res, next)
    })

//Stores the API key and the ProjectID in the service layer for local use
router.route("/store")
    .post((req) => {
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.storeVales(req)
    });

export default router