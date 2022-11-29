import express from "express";
import ProjectsController from "../controllers/projects.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";

const router = express.Router()
const dao = new ProjectsDAO()
router
    .route('/')
    .post((req, res, next) => {

        ProjectsController.apiCreateProject(dao, req, res, next);
    })
    .delete((req, res, next) => {
        const dao = new ProjectsDAO()
        ProjectsController.apiDeleteProject(dao, req, res, next)
    })
    .get((req, res, next) => {
        const dao = new ProjectsDAO()
        ProjectsController.apiGetFilteredProjects(dao, req, res, next)
    })

router.route("/id/:id")
    .get((req, res, next) => {
        const dao = new ProjectsDAO()
        ProjectsController.apiGetProjectByID(dao, req, res, next)
    })

export default router
