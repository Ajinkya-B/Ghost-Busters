import express from "express";
import ProjectsController from "../controllers/projects.controller.js";


const router = express.Router()

router
    .route('/')
    .post(ProjectsController.apiCreateProject)
    .delete(ProjectsController.apiDeleteProject)
    .get(ProjectsController.apiGetAllProjects)

export default router
