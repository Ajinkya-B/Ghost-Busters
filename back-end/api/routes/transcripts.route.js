import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"

const router = express.Router()

// uses the controller to call a specific api
router.route("/")
    .get(TranscriptsCtrl.apiGetTranscripts)
    .post(TranscriptsCtrl.apiPostTranscripts)

export default router