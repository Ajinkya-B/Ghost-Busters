import ProjectsService from "../../services/projects.service.js";

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
            const getAllProjectsResponse = await ProjectsService.getFilteredProjects(dao, req.query);
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
            try {
                const createUserResult = await ProjectsService.createProject(dao, req.body);
                res
                    .status(createUserResult.status)
                    .json(createUserResult.data);
            } catch (e) {
                res.status(500).json({error: e.message})
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
            try {
                const projectName = req.body.project_name;
                const deleteProjectResponse = await ProjectsService.deleteProject(dao, projectName);
                res
                    .status(deleteProjectResponse.status)
                    .json(deleteProjectResponse.data);
            } catch (e) {
                res.status(500).json({error: e.message})
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
                const getprojectByIdResponse = await ProjectsService.getProjectbyID(dao, id);
                res
                    .status(getprojectByIdResponse.status)
                    .json(getprojectByIdResponse.data);
            } catch (e) {
                res.status(500).json({error: e.message});
            }

    }
}
