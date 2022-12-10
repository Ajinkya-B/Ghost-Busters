/**
 * Abstract Class InputBoundaryInterface.
 *
 * @class Interface
 */
export class InputBoundaryInterface {
  /**
   * Adds all the transcripts saved under a project in Voiceflow in form of as well as
   * parsed transcripts to Mongo DB
   * @param textDAO Instance of DAO which the parsed transcripts must be added too
   * @param transcriptDAO Instance of DAO which the text transcripts must be added too
   * @param response response from the voiceflow api call which contains a json object of all transcripts
   */
  async addTranscripts(textDAO, transcriptDAO, response) {
    throw new Error("not implemented");
  }

  /**
   * Query's the database for parsed transcripts with a specific project id
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance where the database operations are preformed on
   * @param query parameter which looks for a specific body in the database
   */
  async getFilteredTranscripts(outputBoundary, dao, query){
    throw new Error("not implemented");
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of the Data access object where the collection will be querryed
   * @param query A project id to query the database with
   */
  async getFilteredTextTranscripts(outputBoundary, dao, query) {
    throw new Error("not implemented");
  }

  /**
   * Query's the database for text transcripts with a specific project id
   * @param dao Instance of the Data access object where the collection will be querryed
   * @param project_id the current project id which is selected
   */
  async flushCollection(dao, project_id) {
    throw new Error("not implemented");
  }

  /**
   * Stores the current project_id and API key for the current state
   * @param req contains data of the current state from the front end
   */
  async saveKeys(req) {
    throw new Error("not implemented");
  }

  /**
   * Creates a new project and returns the status.
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of DAO which the projects are querryed from
   * @param body Contains the project_id as well as the api key that is added to identify each project
   * @returns {Promise<{status: string}>}
   */
  async createProject(outputBoundary, dao, body) {
    throw new Error("not implemented");
  }

  /**
   * Deleted a project with the name projectName and returns the status.
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of DAO which the projects are querryed from
   * @param projectName Name of the project you wish to delete
   * @returns {Promise<{status: string}>}
   */
  async deleteProject(outputBoundary, dao, projectName) {
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
   * Receives a json file from the voiceflow api call
   * @param textDAO Instance of DAO which the parsed transcripts must be added too
   * @param transcriptDAO Instance of DAO which the text transcripts must be added too
   */
  async getVoiceFlowAPIData(textDAO, transcriptDAO) {
    throw new Error("not implemented");
  }

  /**
   * Gets all projects from the database that satisfy the filters.
   * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of DAO which the projects are querryed from
   * @param query An id of a project that you want to search the database for
   */
  async getFilteredProjects(outputBoundary, dao, query) {
    throw new Error("not implemented");
  }

  /**
   * If succuess, returns status and project details of the project with project_id id.
   * Otherwise, returns status failure and empty array.
   * @param outputBoundary Object which passes the returned data back to the controller
   * @param dao Instance of DAO which the projects are querryed from
   * @param id project_id you want to search for in the database
   * @returns {Promise<{data: *, status: string}|{data: *[], status: string}>}
   */
  async getProjectbyID(outputBoundary, dao, id) {
    throw new Error("not implemented");
  }
}