import ProjectDAO from "../dao/projectsDAO.js";
import {avgDurationTime, avgDurationTexts, totalUsersForceQuit, checkReasons} from './AnalyseProjectInteractor.js'

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
      let text_transcripts = project.data.text_transcripts;
      let transcripts = project.data.transcripts;
      const reponse = {
        avg_duration_text: avgDurationTexts(text_transcripts),
        avg_duration_time: avgDurationTime(transcripts),
        total_users_quit: totalUsersForceQuit(text_transcripts),
        reasons: checkReasons(text_transcripts),
      };

      return {
        status: "success",
        data: reponse,
      };
    } catch (e) {
      return {
        status: "failure",
        data: [],
      };
    }
  }
}


