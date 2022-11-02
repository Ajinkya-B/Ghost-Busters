import express from "express";
import ProjectsController from "../controllers/projects.controller.js";


const router = express.Router()

router.route('/createProject')
    .post(ProjectsController.apiCreateProject)

router.route('/getAllProjects')
    .get(ProjectsController.apiGetAllProjects)


export default router
