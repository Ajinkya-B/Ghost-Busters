import ProjectsService from "../../services/projects.service.js";
import ProjectsDAO from "../../dao/projectsDAO.js";
import { project } from "../../entities/project.js";

export default class ProjectsController {
  /**
   * A POST API for creating a project object in MongoDB.
   * @param req
   * @param res
   * @param next
   * @returns {Promise<void>}
   */
  static async apiCreateProject(req, res, next) {
    const createUserResult = await ProjectsService.createProject(req.body);

    switch (createUserResult.status) {
      case "success":
        console.log("Project Created!");
        res.json({ status: "success" });
        return;
      case "failure":
        res.json({ status: "failure" });
        return;
    }
  }

  /**
   * A Delete API for deleting a project object in MongoDB.
   * @param req
   * @param res
   * @param next
   * @returns {Promise<void>}
   */
  static async apiDeleteProject(req, res, next) {
    const projectName = req.query.project_name;
    const deleteProjectResponse = await ProjectsService.deleteProject(
      projectName
    );

    switch (deleteProjectResponse.status) {
      case "success":
        console.log("Project Deleted!");
        res.json({ status: "success" });
        return;
      case "failure":
        res.json({ status: "failure" });
        return;
    }
  }

  static async apiUpdateProject(req, res, next) {
    try {
        const projectName = req.body.project_name;
        const transcript = req.body.transcripts;

        const projectResponse = await ProjectsDAO.updateProject(
            projectName,
            // req.body.project_name,
            transcript
        );

        const { error } = projectResponse;
        if (error) {
            res.status(400).json({ error });
        }

        if (projectResponse.modifiedCount === 0) {
            throw new Error(
            "unable to update project - project selection may be incorrect"
            );
        }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

    /**
     * A GET API for getting an array of all project objects from MongoDB.
     */
    static async apiGetAllProjects(req, res, next) {
        let filters = {};
        if (req.query.project_name) {
        filters.project_name = req.query.project_name;
        } else if (req.query.project_id) {
        filters.project_id = req.query.project_id;
        }

        const getAllProjectsResponse = await ProjectsService.getFilteredProjects({
        filters,
        });

        switch (getAllProjectsResponse.status) {
        case "success":
            console.log("Projects Fetched!");
            res.json(getAllProjectsResponse.data);
            return;
        case "failure":
            res.json({ status: "failure" });
            return;
        }
    }
    

  // Chelsea: Is this function the same as the one above? I made this one
  // by following that MERN stack tutorial on YT (by free code camp).
  static async apiGetFilteredProjects(req, res, next) {
    let filters = {};
    if (req.query.project_name) {
      filters.project_name = req.query.project_name;
    } else if (req.query.project_id) {
      filters.project_id = req.query.project_id;
    }

    const projectsList = await ProjectsDAO.getFilteredProjects({
      filters,
    });

    let response = [projectsList, filters];
    res.json(response);
  }

  /**
   * A GET API for getting a project object with a particular id from MongoDB.
   */
  static async apiGetProjectByID(req, res, next) {
    try {
      let id = req.params.id || {};
      let project = await ProjectsDAO.getProjectByID(id);
      if (!project) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(project);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
