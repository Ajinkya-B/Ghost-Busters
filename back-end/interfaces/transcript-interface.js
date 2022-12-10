/**
 * Abstract Class TextTranscripts.
 *
 * @class Interface
 */
import { EventEmitter } from 'node:events'

export class TranscriptInterface extends EventEmitter{

    /**
     * Get a list of all transcripts and the number of transcripts from database
     * @param query : object full of query filters that you can apply when you get the data
     * @returns : A list of talk steps for a transcript
     */
    async getTranscripts(query) {
        throw new Error("not implemented");
    }


    /**
     * Add a single transcript to database
     * @param {String} projectId : Project id associated with a transcipt
     * @param {Array} transcriptData : Transcript conversation data
     * @returns
     */
    async addTranscript(projectId , transcriptData) {
        throw new Error("not implemented");
    }

    /**
     * FLush a collection from the database
     * @param {String} project_id : Project id associated with a transcipt
     * @returns
     */
    async flushCollection(project_id ) {
        throw new Error("not implemented");
    }

}