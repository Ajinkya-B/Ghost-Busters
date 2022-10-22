import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import voiceflowAPI from "../voiceflowAPI.js";


const router = express.Router()

// uses the controller to call a specific api
router.route("/")
    .get(TranscriptsCtrl.apiGetTranscripts)
    .post(TranscriptsCtrl.apiPostTranscripts)

router.route("/trimmed")
    .get(voiceflowAPI.getData)

router.route("/raw")
    .get(voiceflowAPI.putRaw)


export default router