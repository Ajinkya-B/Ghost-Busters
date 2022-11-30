import express from "express";
import AnalyseProjectController from "../controllers/analyseProject.controller.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
const ProjectDAO = new ProjectsDAO()
import OutputDataBoundary from "../../helpers/outputDataBoundary.js";
import AnalyseProjectService from "../../services/analyseProject.service.js";
const AnalyzeProjectInteractor = new AnalyseProjectService()

const router = express.Router()

router.route("/:id")
    .get((req, res, next) => {
        AnalyseProjectController.setAnalyzeProjectInteractor(AnalyzeProjectInteractor)
        AnalyseProjectController.setOutputBoundary(OutputDataBoundary)
        AnalyseProjectController.getAnalysedData(ProjectDAO, req, res, next)
    })

export default router

