/**
 * Abstract Class TextTranscripts.
 *
 * @class Interface
 */
import { EventEmitter } from 'node:events'

export class TranscriptInterface extends EventEmitter{

    /**
     * Get a list of all transcripts and the number of transcripts from database
     * @param filters : A object full of querry filters that you can apply when you get the data
     * @returns : A list of talk steps for a transcript
     */
    async getTranscripts() {
        throw new Error("not implemented");
    }


    /**
     * Add a single transcript to database
     * @param {String} projectId : Project id associated with a transcipt
     * @param {Array} transcriptData : Transcript conversation data
     * @returns
     */
    async addTranscript(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Deletes the objects in the textTranscripts collection
     * @return {Promise<void>}
     */
    async flushDatabase(query = {}) {
        throw new Error("not implemented");
    }

}