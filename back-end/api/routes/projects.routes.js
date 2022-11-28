import express from "express";
import ProjectsController from "../controllers/projects.controller.js";


const router = express.Router()

router
    .route('/')
    .post(ProjectsController.apiCreateProject)
    .delete(ProjectsController.apiDeleteProject)
    .get(ProjectsController.apiGetFilteredProjects)

router.route("/id/:id")
    .get(ProjectsController.apiGetProjectByID)

export default router
