import express from "express";
import AnalyseProjectController from "../controllers/analyseProject.controller.js";


const router = express.Router()

router.route("/:id")
    .get(AnalyseProjectController.getAnalysedData)

export default router

