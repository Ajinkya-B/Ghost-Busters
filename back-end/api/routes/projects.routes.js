import express from "express";
import ProjectsController from "../controllers/projects.controller.js";


const router = express.Router()

// CHELSEA: I CHANGED THE ROUTES ON NOV 2
// router.route('/createProject')
//     .post(ProjectsController.apiCreateProject)
//
// router.route('/deleteProject')
//     .post(ProjectsController.apiCreateProject)
//
// router.route('/getAllProjects')
//     .get(ProjectsController.apiGetAllProjects)

router
    .route('/')
    .post(ProjectsController.apiCreateProject)
    .delete(ProjectsController.apiDeleteProject)
    .get(ProjectsController.apiGetAllProjects)

router.route("/id/:id").get(ProjectsController.apiGetProjectById)

router.route('/getFilteredProjects')
    .get(ProjectsController.apiGetFilteredProjects)


export default router
