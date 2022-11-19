import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import controller from "../../api/controllers/transcripts.controller.js"

import server from "../../server.js"


const router = express.Router()

// uses the controller to call a specific api
router.route("/getParsedTranscripts")
    .get(TranscriptsCtrl.getParsedTranscripts)

router.route("/getTrimmedTranscripts")
    .get(controller.getTrimmedTranscripts)

router.route("/trimmed")
    .post(controller.addClean)

router.route("/flush")
    .get(controller.flushDB)


router.route('/store')
    .post(controller.storeVales)

router.route('/getCredentials')
    .get(controller.getValues)


export default router