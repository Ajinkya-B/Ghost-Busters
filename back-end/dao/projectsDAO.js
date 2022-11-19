import { ObjectId } from "mongodb";

let projects;


export default class ProjectsDAO {
  static async injectDB(conn) {
    if (projects) {
      return;
    }
    try {
      projects = await conn.db(process.env.PROJECTS_NS).collection("Projects");

    } catch (e) {
      console.error(
        `Unable to establish a collection handle in projectsDAO: ${e}`
      );
    }
  }


    /**
   * Get an array of all the projects from MongoDB.
   * @returns an array of all the projects from the database
   */
  static async getProjects(query) {
    try {
      return await projects.find(query).toArray();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return [];
    }
  }

  /**
   * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
   */
  static async createProject(req, res, next) {
    try{
        await projects.insertOne(req);
    }catch(e){
        console.error(`Unable to issue insertOne command, ${e}`);
    }
  }

  static async deleteProject(projectName) {
    try {
      const deleteResponse = await projects.deleteOne({
        project_name: projectName,
      });
      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete project: ${e}`);
      return { error: e };
    }
  }

  static async updateProject(projectName, transcript) {
    try {
      const updateResponse = await projects.updateOne(
        { project_name: projectName },
        { $addToSet: { transcripts: transcript } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update project: ${e}`);
      return { error: e };
    }
  }

  /**
   * Get a project object with a particular id from MongoDB.
   * @param id
   */
  static async getProjectByID(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "Parsed",
            let: {
              id: "$project_id",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$project_id", "$$id"],
                  },
                },
              },
            ],
            as: "transcripts",
          },},

        {$lookup: {
            from: "Text",
            let: {
              id: "$project_id",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$project_id", "$$id"],
                  },
                },
              },
            ],
            as: "text_transcripts",
          },
        },
        {
          $addFields: {
            transcripts: "$transcripts",
            text_transcripts: "$text_transcripts"
          },
        },
      ];
      return await projects.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getProjectByID: ${e}`);
      throw e;
    }
  }
}