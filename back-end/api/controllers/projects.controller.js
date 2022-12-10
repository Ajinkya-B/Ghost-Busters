import {InputBoundaryInterface} from "../../interfaces/input-boundary-interface.js";

export default class ProjectsController {

    //Setting the input boundary for an instance of the Transcript Controller
    static #inputBoundary

    /**
     * Checks to make sure the interactor being passed in from the route is a proper
     * InputBoundaryInterface
     * @param interactor should be an instance of ProjectService
     */
    static setProjectInteractor(interactor) {
        if(interactor instanceof InputBoundaryInterface){
            this.#inputBoundary = interactor;
        } else {
            throw new Error("not an InputBoundary");
        }
    }

    //Sets the output boundary for an instance of the controller
    static #outputBoundary;

    /**
     * All the data coming out of the service layer is passed through the output boundary
     * which is set here
     * @param outputBoundary instance of outputBoundary
     */
    static setOutputBoundary(outputBoundary) {
        if(outputBoundary.isOutputBoundaryInterface){
            this.#outputBoundary = outputBoundary;
        } else {
            throw new Error("not an OutputBoundary");
        }
    }

    /**
     * A GET API for getting an array of all project objects. Returned Projects are sent through the output boundary
     * @param dao instance of projectsDAO, when the db is queryed it uses a specific dao
     * @param req contains additional body passed to an API call
     * @param res json object that is returned after making an API call
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetFilteredProjects(dao, req, res, next) {
        try{
            await this.#inputBoundary.getFilteredProjects(this.#outputBoundary, dao, req.query);
            res
                .status(this.#outputBoundary.getOutput().status)
                .json(this.#outputBoundary.getOutput().data);
        }catch(e) {
            res.status(500).json({error: e.message})
        }

    }


    /**
     * A POST API for creating a project object in MongoDB. The response if a project was successfully created is sent through the output boundary
     * @param dao instance of projectsDAO, when the db is queryed it uses a specific dao
     * @param req contains additional body passed to an API call
     * @param res json object that is returned after making an API call
     * @param next
     * @returns {Promise<void>}
     */
    static async apiCreateProject(dao, req, res, next) {
            try {
                await this.#inputBoundary.createProject(this.#outputBoundary, dao, req.body);
                res
                    .status(this.#outputBoundary.getOutput().status)
                    .json(this.#outputBoundary.getOutput().data);
            } catch (e) {
                res.status(500).json({error: e.message})
            }

    }

    /**
     * A Delete API for deleting a project object in MongoDB.
     * @param dao instance of projectsDAO, when the db is queryed it uses a specific dao.
     * The response if a project was successfully deleted is sent through the output boundary
     * @param req contains additional body passed to an API call
     * @param res json object that is returned after making an API call
     * @param next
     * @returns {Promise<void>}
     */
    static async apiDeleteProject(dao, req, res, next) {
        try {
            const projectName = req.body.project_name;
            await this.#inputBoundary.deleteProject(this.#outputBoundary, dao, projectName);
            res
                .status(this.#outputBoundary.getOutput().status)
                .json(this.#outputBoundary.getOutput().data);
        } catch (e) {
            res.status(500).json({error: e.message})
        }

    }


    /**
     * A GET API for getting a project object with a particular id from MongoDB.
     * @param dao instance of projectsDAO, when the db is queryed it uses a specific dao.
     * The response is the project that was found in the database with that corresponding ID
     * @param req contains additional body passed to an API call
     * @param res json object that is returned after making an API call
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetProjectByID(dao, req, res, next) {
            try {
                let id = req.params.id || {};
                await this.#inputBoundary.getProjectbyID(this.#outputBoundary, dao, id);
                res
                    .status(this.#outputBoundary.getOutput().status)
                    .json(this.#outputBoundary.getOutput().data);
            } catch (e) {
                res.status(500).json({error: e.message});
            }

    }
}
