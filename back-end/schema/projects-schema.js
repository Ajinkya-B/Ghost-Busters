import mongoose from "mongoose";


// This defines the structure of the projects data object
const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true,
    },
    version_id: {
        type: String,
        required: true,
    },
    api_key: {
        type: String,
        required: true
    },
    transcripts: {
        type: Array
    }
});

export const Projects = mongoose.model("Projects", projectSchema);