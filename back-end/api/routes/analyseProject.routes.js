import express from "express";
import AnalyseProjectController from "../controllers/analyseProject.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
const ProjectDAO = new ProjectsDAO()
import OutputDataBoundary from "../../helpers/outputDataBoundary.js";

const router = express.Router()

router.route("/:id")
    .get((req, res, next) => {
        AnalyseProjectController.setOutputBoundary(OutputDataBoundary)
        AnalyseProjectController.getAnalysedData(ProjectDAO, req, res, next)
    })

export default router

