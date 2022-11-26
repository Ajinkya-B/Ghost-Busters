import {ObjectId} from "mongodb";
import {Projects} from "../schema/projects-schema.js"
import mongoose from "mongoose";


export default class ProjectsDAO {

    async getProjects(query) {
        try {
            return await Projects.find(query);
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return [];
        }
    }


    /**
     * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
     */
    async createProject(body) {
        try {
            await Projects.create(body);
        } catch (e) {
            console.error(`Unable to issue create command, ${e}`);

        }
    }


    /**
     * Delete the project object with the name projectName from the database.
     * @param projectName
     * @returns {Promise<{error}|*>}
     */
    async deleteProject(projectName) {
        try {
            const deleteResponse = await Projects.deleteOne({
                project_name: projectName,
            });
            return deleteResponse;
        } catch (e) {
            console.error(`Unable to delete project: ${e}`);
            return {error: e};
        }
    }


    /**
     *
     * @param projectName
     * @param transcript
     * @returns {Promise<{error}|*>}
     */
    async updateProject(projectName, transcript) {
        try {
            const updateResponse = await projects.updateOne(
                {project_name: projectName},
                {$addToSet: {transcripts: transcript}}
            );

            return updateResponse;
        } catch (e) {
            console.error(`Unable to update project: ${e}`);
            return {error: e};
        }
    }


    /**
     * Get a project object with a particular id from MongoDB.
     * Also, add parsed and trimmed transcripts corresponding to that project to the project object.
     * @param id
     * @returns {Promise<*>}
     */
    async getProjectByID(id) {
        try {
            const pipeline = [
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(id),
                    },
                },
                {
                    $lookup: {
                        from: "text transcripts",
                        let: {
                            id: "$version_id",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$version_id", "$$id"],
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
                            id: "$version_id",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$version_id", "$$id"],
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
            const temp = await Projects.aggregate(pipeline);
            return temp[0];
            // return await Projects.aggregate(pipeline)
        } catch (e) {
            console.error(`Something went wrong in getProjectByID: ${e}`);
            throw e;
        }
    }
}
