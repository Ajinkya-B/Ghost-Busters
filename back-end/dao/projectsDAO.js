import {MongoClient} from "mongodb";

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
     * Get an array of all the projects from MongoDB.
     * @returns an array of all the projects from the database
     */
    static async getProjects({
         filters = null
    } = {})
    {
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
    }

    /**
     * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    static async createProject(req, res, next){
        const client = new MongoClient(process.env.MONGO_DB_URI);
        const dbo = client.db("ProjectsDB")
        await dbo.collection("Projects").insertOne(req)
    }

    /**
     * Get an array of all project objects from MongoDB.
     */
    static async getAllProjects() {
        const client = new MongoClient(process.env.MONGO_DB_URI);
        const dbo = client.db("ProjectsDB");
        return await dbo.collection("Projects").find().toArray();
    }

}