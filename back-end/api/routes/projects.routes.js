import express from "express";
import ProjectsController from "../controllers/projects.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
import OutputDataBoundary from "../../helpers/outputDataBoundary.js";
import ProjectsService from "../../services/projects.service.js";

const ProjectServiceInteractor = new ProjectsService()
const router = express.Router()
const dao = new ProjectsDAO()
router
    .route('/')
    .post((req, res, next) => {
        ProjectsController.setProjectInteractor(ProjectServiceInteractor)
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiCreateProject(dao, req, res, next);
    })
    .delete((req, res, next) => {
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiDeleteProject(dao, req, res, next)
    })
    .get((req, res, next) => {
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiGetFilteredProjects(dao, req, res, next)
    })

router.route("/id/:id")
    .get((req, res, next) => {
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiGetProjectByID(dao, req, res, next)
    })

export default router
