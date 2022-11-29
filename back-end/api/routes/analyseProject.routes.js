import express from "express";
import AnalyseProjectController from "../controllers/analyseProject.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
const ProjectDAO = new ProjectsDAO()

const router = express.Router()

router.route("/:id")
    .get((req, res, next) => {
        AnalyseProjectController.getAnalysedData(ProjectDAO, req, res, next)
    })

export default router

