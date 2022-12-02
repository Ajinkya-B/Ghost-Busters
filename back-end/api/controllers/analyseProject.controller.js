import {InputBoundaryInterface} from "../../interfaces/input-boundary-interface.js";
import {AnalyseProjectInteractor} from "../../services/AnalyseProjectInteractor.js";
import AnalyseProjectService from "../../services/analyseProject.service.js";


/**
 * A Get API to get the analysed metrics of a project.
 * @param {Object} req : contains additional body passed to an API call
 * @param {Object} res : json object that is returned after making an API call
 * @param {Object} next
 */
export default class AnalyseProjectController{

    static #inputBoundary

    static setAnalyzeProjectInteractor(interactor) {
        if(interactor instanceof InputBoundaryInterface){
            this.#inputBoundary = interactor;
        } else {
            throw new Error("not an InputBoundary");
        }
    }

    static #outputBoundary;

    static setOutputBoundary(outputBoundary) {
        if(outputBoundary.isOutputBoundaryInterface){
            this.#outputBoundary = outputBoundary;
        } else {
            throw new Error("not an OutputBoundary");
        }
    }


    static async getAnalysedData(dao, req, res, next){
        let id = req.params.id || {};
        try{
            await this.#inputBoundary.analyseProject(this.#outputBoundary, dao, id)
        switch (this.#outputBoundary.getOutput().status) {
            case "success":
                console.log("Project Analysed!");
                res.json(this.#outputBoundary.getOutput().data);
                return;
            case "failure":
                res.json({ status: "failure" });
                return;
        }
    } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}

