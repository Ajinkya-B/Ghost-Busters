/**
 * Abstract Class InputBoundaryInterface.
 *
 * @class Interface
 */
export class InputBoundaryInterface{
    static isInputBoundaryInterface = true;

    /**
     * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
     * @param textDAO
     * @param transcriptDAO
     * @param {Object} req : contains additional body passed to an API call
     * @param {Object} res : json object that is returned after making an API call
     * @param {Object} next
     */
    static async addTranscripts(query = {}){
        throw new Error("not implemented");
    }

    /**
     *  @param {Object} rawTranscript raw transcript uploaded by user
     *  @return {Object} properly formatted data from the transcript
     * */
    static async storeValues(query = {}) {
        throw new Error("not implemented");
    }

    /**
     *  @param {Object} filter object passed to mangoose to find the question
     *  @param {Object} status the star status
     * */
    static async setStarStatus(filter = {}, status = {}) {
        throw new Error("not implemented");
    }

    /**
     *  @param {Object} filter object passed to mangoose to find the question
     *  @param {Object} status the flag status
     * */
    static async setFlagStatus(filter = {}, status = {}) {
        throw new Error("not implemented");
    }
}