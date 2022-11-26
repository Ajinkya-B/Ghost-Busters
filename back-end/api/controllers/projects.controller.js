import ProjectsService from "../../services/projects.service.js";
import ProjectsDAO from "../../dao/projectsDAO.js";

export default class ProjectsController {
    /**
    * A POST API for creating a project object in MongoDB.
    * @param req
    * @param res
    * @param next
    * @returns {Promise<void>}
]   */
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
    const projectName = req.body.project_name;
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

          const {error} = projectResponse;
          if (error) {
              res.status(400).json({error});
              switch (createUserResult.status) {
                  case "success":
                      console.log("Project Created!");
                      res.json({status: "success"});
                      return;
                  case "failure":
                      res.status(500).json({status: "failure"});
                      return;
              }
          }
      } catch (e) {
          res.status(500).json({status: "failure"});
      }
  }

    /**
     * A GET API for getting an array of all project objects from MongoDB.
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetAllProjects(req, res, next) {
        let filters = {};
        if (req.query.project_name) {
            filters.project_name = req.query.project_name;
        } else if (req.query.version_id) {
            filters.version_id = req.query.version_id;
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
                res.status(500).json({ status: "failure" });
                return;
        }
    }


    /**
     * A GET API for getting a project object with a particular id from MongoDB.
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async apiGetProjectByID(req, res, next) {
        let id = req.params.id || {};
        const getprojectByIDResponse = await ProjectsService.getProjectbyID(id);
        switch (getprojectByIDResponse.status) {
            case "success":
                console.log("Projects Fetched!");
                res.json(getprojectByIDResponse.data);
                return;
            case "failure":
                res.status(500).json({ status: "failure" });
                return;
        }
}}
