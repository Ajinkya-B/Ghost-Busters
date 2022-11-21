import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"

const router = express.Router()

// uses the controller to call a specific api
router.route("/getParsedTranscripts")
    .get(TranscriptsCtrl.getParsedTranscripts)

router.route("/getTrimmedTranscripts")
    .get(TranscriptsCtrl.getTrimmedTranscripts)

router.route("/trimmed")
    .post(TranscriptsCtrl.addClean)

router.route("/flush")
    .get(TranscriptsCtrl.flushDB)

router.route("/store")
    .post(TranscriptsCtrl.storeVales);

export default router