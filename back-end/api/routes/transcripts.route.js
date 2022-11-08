import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import controller from "../../api/controllers/transcripts.controller.js"

import server from "../../server.js"


const router = express.Router()

// uses the controller to call a specific api
router.route("/")
    .get(TranscriptsCtrl.apiGetTranscripts)
    .post(TranscriptsCtrl.apiPostTranscripts)

router.route("/trimmed")
    .post(controller.addClean)

router.route("/flush")
    .get(controller.flushDB)

router.route("/getTrimmed")
    .get(controller.getTrim)

router.route('/createProject')
    .post(controller.createProject)

router.route('/test')
    .post(controller.enterProject)

router.route('/store')
    .post(controller.storeVales)

router.route('/getCredentials')
    .get(controller.getValues)


export default router