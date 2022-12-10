import {Projects} from "../schema/projects-schema.js"
import mongoose from "mongoose";
import {ProjectsInterface} from "../interfaces/projects-interface.js";


export default class ProjectsDAO extends ProjectsInterface {
    /**
     * Get the projects that match the query from MongoDB
     * @param {Object} query Filters for projects
     * @returns A list of project objects
     */
    async getProjects(query) {
        try {
            const projectList = await Projects.find(query);
            return {
                status: 200,
                data: projectList,
            }
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return {
                status: 500,
                data: {error: e.message}
            };
        }
    }


    /**
     * Create a project object in MongoDB (see AddProject.js in /front-end for more info).
     * @param {Object} body A project object that has project data
     * @returns A list of project objects
     */
    async createProject(body) {
        try {
            await Projects.create(body);
            return {
                status: 200,
                data: {response: `successfully created project`}
            };
        } catch (e) {
            console.error(`Unable to issue create command, ${e}`);
            return {
                status: 500,
                data: { error: e.message },
            };
        }
    }


    /**
     * Delete the project object with the name projectName from the database.
     * @param {String} projectName Name of the project to be deleted
     * @returns {Promise<{error}|*>}
     */
    async deleteProject(projectName) {
        try {
            await Projects.deleteOne({project_name: projectName});
            return {
                status: 200,
                data: { response: `successfully deleted project ${projectName}` },
            };
        } catch (e) {
            console.error(`Unable to issue delete command, ${e}`);
            return {
                status: 500,
                data: { error: e.message },
            };
        }
    }


    /**
     * Get a project object with a particular id from MongoDB.
     * Also, add parsed and trimmed transcripts corresponding to that project to the project object.
     * @param id the id of the current project that must be analyzed
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
            const transcriptsList = await Projects.aggregate(pipeline);
            const temp = transcriptsList[0];
            return {
                status: 200,
                data: temp,
            };
            // return await Projects.aggregate(pipeline)
        } catch (e) {
            console.error(`Unable to issue aggregate command, ${e}`);
            return {
                status: 500,
                data: { error: e.message },
            };
        }
    }
}

