import ProjectsService from "../../services/projects.service.js";
import {ProjectsInterface} from "../../interfaces/projects-interface.js";

export default class ProjectsController {

    /**
     * A GET API for getting an array of all project objects.
     * @param dao
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetFilteredProjects(dao, req, res, next) {
        try{
            const getAllProjectsResponse = await ProjectsService.getFilteredProjects(req.query);
            res
                .status(getAllProjectsResponse.status)
                .json(getAllProjectsResponse.data);
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }
    

    /**
     * A POST API for creating a project object in MongoDB.
     * @param dao
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiCreateProject(dao, req, res, next) {
        if (dao instanceof  ProjectsInterface) {
            try {
                const createUserResult = await ProjectsService.createProject(req.body);
                res
                    .status(createUserResult.status)
                    .json(createUserResult.data);
            } catch (e) {
                res.status(500).json({error: e.message})
            }
        } else {
            throw new Error("not an ProjectInterface");
        }
    }

    /**
     * A Delete API for deleting a project object in MongoDB.
     * @param dao
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiDeleteProject(dao, req, res, next) {
        if (dao instanceof  ProjectsInterface) {
            try {
                const projectName = req.body.project_name;
                const deleteProjectResponse = await ProjectsService.deleteProject(projectName);
                res
                    .status(deleteProjectResponse.status)
                    .json(deleteProjectResponse.data);
            } catch (e) {
                res.status(500).json({error: e.message})
            }
        }
        else {
            throw new Error("not an ProjectInterface");
        }
    }


    /**
     * A GET API for getting a project object with a particular id from MongoDB.
     * @param dao
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetProjectByID(dao, req, res, next) {
        try {
            let id = req.params.id || {};
            const getprojectByIdResponse = await ProjectsService.getProjectbyID(id);
            res
                .status(getprojectByIdResponse.status)
                .json(getprojectByIdResponse.data);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
}}
