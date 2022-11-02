import express from "express"
import TranscriptsController from "../controllers/transcripts.controller.js"


const router = express.Router()

// TRANSCRIPT ROUTES: uses the transcript controllers to call a specific api
router.route("/")
    .get(TranscriptsController.apiGetTranscripts)
    .post(TranscriptsController.apiPostTranscripts)

router.route("/trimmed")
    .get(TranscriptsController.addClean)

router.route("/raw")
    .get(TranscriptsController.addRaw)

router.route("/flush")
    .get(TranscriptsController.flushDB)

router.route("/getTrimmed")
    .get(TranscriptsController.getTrim)


export default router