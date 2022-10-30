import express from "express"
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import controller from "../../api/controllers/transcripts.controller.js"
import ProjectsController from "../controllers/projects.controller.js";

const router = express.Router()

// TRANSCRIPT ROUTES: uses the transcript controllers to call a specific api
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


// PROJECT ROUTES
router.route('/createProject')
    .post(ProjectsController.apiCreateProject)

router.route('/getAllProjects')
    .get(ProjectsController.apiGetAllProjects)


export default router