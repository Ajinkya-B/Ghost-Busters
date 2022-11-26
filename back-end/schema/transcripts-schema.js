import mongoose from "mongoose";

// This defines the structure of the text transcripts data object
const transcriptsSchema = new mongoose.Schema({
    project_id: {
        type: String,
        required: true,
    },
    transcript_data: {
        type: Array,
        reduired: true
    }
});

export const Transcripts = mongoose.model("Transcripts", transcriptsSchema);
