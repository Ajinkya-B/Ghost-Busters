import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import controller from "../../api/controllers/transcripts.controller.js"


const router = express.Router()

// uses the controller to call a specific api
router.route("/")
    .get(TranscriptsCtrl.apiGetTranscripts)
    .post(TranscriptsCtrl.apiPostTranscripts)

router.route("/trimmed")
    .get(controller.addClean)

router.route("/raw")
    .get(controller.addRaw)

router.route("/flush")
    .get(controller.flushDB)

router.route("/getTrimmed")
    .get(controller.getTrim)

router.route('/createProject')
    .post(controller.createProject)


export default router