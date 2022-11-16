let projects

export default class ProjectsDAO {

    static async injectDB(conn) {
        if (projects) {
            return
        }
        try {
            projects = await conn.db(process.env.PROJECTS_NS).collection("Projects")
        } catch (e) {
          console.error(
              `Unable to establish a collection handle in projectsDAO: ${e}`,
          )
        }
    }

    /**
     * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
     */
    static async createProject(req, res, next){
        await projects.insertOne(req)
    }

    static async deleteProject(projectName) {
        try {
            const deleteResponse = await projects.deleteOne({
                project_name: projectName
            })
            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete project: ${e}`)
            return { error: e }
        }
    }

    /**
     * Get an array of all the projects (with or without filters) from MongoDB.
     * @returns an array of all the projects from the database
     */
    static async getAllProjects( { filters = null } = {} ) {
        let query
        if (filters) {
            if ("project_name" in filters) {
                query = { "project_name": { $eq: filters["project_name"] } }
            } else if ("project_id" in filters) {
                query = { "project_id": { $eq: filters["project_id"] } }
            }
        }
        let cursor
        try {
            cursor = await projects
                .find(query)
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return []
        }

        // return await projects.find().toArray();
    }

}