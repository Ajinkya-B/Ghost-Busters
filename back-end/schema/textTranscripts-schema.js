import mongoose from "mongoose";

// This defines the structure of the text transcripts data object
const textTranscriptsSchema = new mongoose.Schema({
    project_id: {
        type: String,
        required: true,
    },
    dialogue: {
        type: Array,
        reduired: true
    }
});

export const TextTranscripts = mongoose.model("Text Transcripts", textTranscriptsSchema);
