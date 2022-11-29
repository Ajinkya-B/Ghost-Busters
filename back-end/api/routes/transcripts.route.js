import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import TextTranscriptDAO from "../../dao/textTranscriptsDAO.js";
import TranscriptDAO from "../../dao/transcriptsDAO.js"
const router = express.Router()
const textDao = new TextTranscriptDAO()
const transcriptDao = new TranscriptDAO()

// uses the controller to call a specific api
router.route("/getParsedTranscripts")
    .get((req, res, next) => {
        TranscriptsCtrl.getParsedTranscripts(transcriptDao, req, res, next)
    })

router.route("/getTrimmedTranscripts")
    .get((req, res, next) =>{
        TranscriptsCtrl.getTrimmedTranscripts(textDao, req, res, next)
    })

router.route("/trimmed")
    .post((req, res, next) => {
        TranscriptsCtrl.addClean(textDao, TranscriptDAO, req, res, next)
    })

router.route("/flush")
    .get((req, res, next) => {
        TranscriptsCtrl.flushDB(transcriptDao, req, res, next)
    })

router.route("/store")
    .post((req, res, next) => {
        TranscriptsCtrl.storeVales(textDao, req, res, next)
    });

export default router