import { ObjectId } from "mongodb";
import { Projects } from "../schema/projects-schema.js"
import mongoose from "mongoose";

let projects

export default class ProjectsDAO {

  static async getProjects(query) {
    try {
      return await Projects.find(query).exec();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return [];
    }
  }

  /**
   * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
   */
  static async createProject(body) {
    try{
      await Projects.create(body);
    }catch(e){
        console.error(`Unable to issue create command, ${e}`);
    }
  }

  static async deleteProject(projectName) {
    try {
      const deleteResponse = await Projects.deleteOne({
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
            _id: new mongoose.Types.ObjectId(id) ,
          },
        },
        {
          $lookup: {
            from: "text transcripts",
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
          $lookup: {
            from: "transcripts",
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
          },
        },
        {
          $addFields: {
            transcripts: "$transcripts",
            text_transcripts: "$text_transcripts"
          },
        },
      ];
      // const temp = await Projects.aggregate(pipeline);
      // return temp[0];
      return await Projects.aggregate(pipeline)
    } catch (e) {
      console.error(`Something went wrong in getProjectByID: ${e}`);
      throw e;
    }
  }
}