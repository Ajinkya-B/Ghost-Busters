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
     * Creates a new project and returns the status.
     * @param dao
     * @param body
     * @returns {Promise<{status: string}>}
     */
    static async createProject(query = {}) {
        throw new Error("not implemented");
    }

    /**
     * Returns analysed metrics for a project with the project_id id.
     * @param outputBoundary
     * @param dao
     * @param id
     * @returns {Promise<{data: {total_users_quit: *, avg_duration_text: *, avg_duration_time: *}, status: string}|{data: *[], status: string}>}
     */
    static async analyzeProject(filter = {}, status = {}) {
        throw new Error("not implemented");
    }
}