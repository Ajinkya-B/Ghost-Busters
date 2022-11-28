import ProjectDAO from "../dao/projectsDAO.js";
import AnalyseProjectInteractor from './AnalyseProjectInteractor.js'

export default class AnalyseProjectService {
  static #ProjectDAO = new ProjectDAO;
  /**
   * Returns analysed metrics for a project with the project_id id.
   * @param id
   * @returns {Promise<{data: {total_users_quit: *, avg_duration_text: *, avg_duration_time: *}, status: string}|{data: *[], status: string}>}
   */
  static async analyseProject(id) {
    try {
      const project = await this.#ProjectDAO.getProjectByID(id);
      let text_transcripts = project.text_transcripts;
      let transcripts = project.transcripts;
      const response = {
        avg_duration_text: AnalyseProjectInteractor.avgDurationTexts(text_transcripts),
        avg_duration_time: AnalyseProjectInteractor.avgDurationTime(transcripts),
        total_conversations: AnalyseProjectInteractor.totalConvosPerDay(transcripts),
        total_users_quit_per_day: AnalyseProjectInteractor.totalUsersForceQuitPerDay(text_transcripts, transcripts),
        reasons: AnalyseProjectInteractor.checkReasons(text_transcripts, transcripts),
        num_satisfied_users: AnalyseProjectInteractor.numSatisfiedUsers(text_transcripts, transcripts),
        num_unsatisfied_users: AnalyseProjectInteractor.numUnsatisfiedUsers(text_transcripts, transcripts),
        total_convos_per_day: AnalyseProjectInteractor.totalConvosPerDay(transcripts)
      };

      return {
        status: "success",
        data: response,
      };
    } catch (e) {
      return {
        status: "failure",
        data: [],
      };
    }
  }
}


