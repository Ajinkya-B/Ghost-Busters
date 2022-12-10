import express from "express";
import ProjectsController from "../controllers/projects.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
import OutputDataBoundary from "../../helpers/outputDataBoundary.js";
import ProjectsService from "../../services/projects.service.js";

const ProjectServiceInteractor = new ProjectsService()
const router = express.Router()
const dao = new ProjectsDAO()
router.route('/')
    // Creates a project in the database
    .post((req, res, next) => {
        ProjectsController.setProjectInteractor(ProjectServiceInteractor)
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiCreateProject(dao, req, res, next);
    })
    //Deletes a project in the database
    .delete((req, res, next) => {
        ProjectsController.setProjectInteractor(ProjectServiceInteractor)
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiDeleteProject(dao, req, res, next)
    })
    //Returns all projects from the database
    .get((req, res, next) => {
        ProjectsController.setProjectInteractor(ProjectServiceInteractor)
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiGetFilteredProjects(dao, req, res, next)
    })

router.route("/id/:id")
    //Returns a project from the database with a specific id
    .get((req, res, next) => {
        ProjectsController.setProjectInteractor(ProjectServiceInteractor)
        ProjectsController.setOutputBoundary(OutputDataBoundary)
        ProjectsController.apiGetProjectByID(dao, req, res, next)
    })

export default router
