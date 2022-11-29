import {avgDurationTime, avgDurationTexts, totalUsersForceQuit, checkReasons} from './AnalyseProjectInteractor.js'
import {ProjectsInterface} from "../interfaces/projects-interface.js";

export default class AnalyseProjectService {

  /**
   * Returns analysed metrics for a project with the project_id id.
   * @param outputBoundary
   * @param dao
   * @param id
   * @returns {Promise<{data: {total_users_quit: *, avg_duration_text: *, avg_duration_time: *}, status: string}|{data: *[], status: string}>}
   */

  static async analyseProject(outputBoundary, dao, id) {
    if (dao instanceof ProjectsInterface) {
    try {
      const project = await dao.getProjectByID(id);
      let text_transcripts = project.data.text_transcripts;
      let transcripts = project.data.transcripts;
      const reponse = {
        avg_duration_text: avgDurationTexts(text_transcripts),
        avg_duration_time: avgDurationTime(transcripts),
        total_users_quit: totalUsersForceQuit(text_transcripts),
        reasons: checkReasons(text_transcripts),
      };
      outputBoundary.setOutput({status: "success",
          data: reponse})
    } catch (e) {
      outputBoundary.setOutput({status: "failure", data: []})
    }
    } else {
      new Error("not an ProjectInterface");
    }
  }
}


