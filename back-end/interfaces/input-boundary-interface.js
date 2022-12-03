/**
 * Abstract Class InputBoundaryInterface.
 *
 * @class Interface
 */
export class InputBoundaryInterface{

    /**
     * Adds all the transcripts saved under a project in Voiceflow in form of 'textTranscripts' to Mongo DB
     * @param textDAO
     * @param transcriptDAO
     * @param {Object} req : contains additional body passed to an API call
     * @param {Object} res : json object that is returned after making an API call
     * @param {Object} next
     */
    async addTranscripts(query = {}){
        throw new Error("not implemented");
    }

    /**
     *  @param {Object} rawTranscript raw transcript uploaded by user
     *  @return {Object} properly formatted data from the transcript
     * */
    async saveKeys(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Creates a new project and returns the status.
     * @param dao
     * @param body
     * @returns {Promise<{status: string}>}
     */
     async createProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Returns analysed metrics for a project with the project_id id.
     * @param outputBoundary
     * @param dao
     * @param id
     * @returns {Promise<{data: {total_users_quit: *, avg_duration_text: *, avg_duration_time: *}, status: string}|{data: *[], status: string}>}
     */
     async analyseProject(outputBoundary, dao, id) {
        throw new Error("not implemented");
    }

    /**
     *    * Receives a json file from the voiceflow api call
     *    * @param textDAO
     *    * @param transcriptDAO
     */
    async getVoiceFlowAPIData(textDAO, transcriptDAO) {
        throw new Error("not implemented");
    }
}