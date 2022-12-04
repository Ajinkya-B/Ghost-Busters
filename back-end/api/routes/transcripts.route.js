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

// uses the controller to call a specific api
router.route("/getParsedTranscripts")
    .get((req, res, next) => {
        TranscriptsCtrl.setOutputBoundary(OutputDataBoundary)
        TranscriptsCtrl.apiGetCleanedTranscripts(transcriptDao, req, res, next)
    })

router.route("/getTrimmedTranscripts")
    .get((req, res, next) =>{
        TranscriptsCtrl.setOutputBoundary(OutputDataBoundary)
        TranscriptsCtrl.apiGetTextTranscripts(textDao, req, res, next)
    })

router.route("/trimmed")
    .post((req, res, next) => {
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.addTranscripts(textDao, transcriptDao, req, res, next)
    })

router.route("/flush")
    .get((req, res, next) => {
        TranscriptsCtrl.flushDB(transcriptDao, req, res, next)
    })

router.route("/store")
    .post((req, res, next) => {
        TranscriptsCtrl.setTranscriptInteractor(TranscriptServiceInteractor)
        TranscriptsCtrl.storeVales(req)
    });

export default router