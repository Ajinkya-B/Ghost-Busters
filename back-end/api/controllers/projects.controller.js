import ProjectsDAO from "../../dao/projectsDAO.js";
import {project} from "../../entities/project.js";


export default class ProjectsController {

    /**
     * A POST API for creating a project object in MongoDB.
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiCreateProject(req, res, next) {
        console.log(req.body)
        await ProjectsDAO.createProject(req.body);
        console.log("Project Created");
    }

    /**
     * A Delete API for deleting a project object in MongoDB.
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiDeleteProject(req, res, next) {
        try {
            const projectName = req.body.project_name
            console.log(projectName)
            await ProjectsDAO.deleteProject(projectName)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateProject(req, res, next) {
        try {
            const projectName = req.body.project_name
            const transcript = req.body.transcripts

            const projectResponse = await ProjectsDAO.updateProject(
                projectName,
                // req.body.project_name,
                transcript
            )

            const {error} = projectResponse;
            if (error) {
                res.status(400).json({ error })
            }

            if (projectResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update project - project selection may be incorrect",
                )
            }

            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    /**
     * A GET API for getting an array of all project objects from MongoDB.
     */
    static async apiGetAllProjects(req, res, next) {
        let itemsSoFar = []
        let response = await ProjectsDAO.getAllProjects()
        // for (let x = 0; x < response.length; x++) {
        //     let tempObject = new project( response[x]["project_name"], response[x]["project_id"],
        //         response[x]["api_key"], response[x]["transcripts"]);
        //     itemsSoFar.push(tempObject);
        // }
        // console.log(itemsSoFar);
        res.json(response); // changed this function to return object id as well as other fields.

    }

    // Chelsea: Is this function the same as the one above? I made this one
    // by following that MERN stack tutorial on YT (by free code camp).
    static async apiGetFilteredProjects(req, res, next) {
        let filters = {}
        if (req.query.project_name) {
            filters.project_name = req.query.project_name
        } else if (req.query.project_id) {
            filters.project_id = req.query.project_id
        }

        const projectsList = await ProjectsDAO.getFilteredProjects({
            filters
        })

        let response = [
            projectsList,
            filters
        ]
        res.json(response)
    }

    /**
     * A GET API for getting a project object with a particular id from MongoDB.
     */
    static async apiGetProjectByID(req, res, next) {
        try {
            let id = req.params.id || {}
            let project = await ProjectsDAO.getProjectByID(id)
            if (!project) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(project)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }


    }

}