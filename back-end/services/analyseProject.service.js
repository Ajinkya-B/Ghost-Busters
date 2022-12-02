import {ProjectsInterface} from "../interfaces/projects-interface.js";
import {InputBoundaryInterface} from "../interfaces/input-boundary-interface.js";
import ProjectDAO from "../dao/projectsDAO.js";
import {AnalyseProjectInteractor}  from "./AnalyseProjectInteractor.js";

export default class AnalyseProjectService extends InputBoundaryInterface {
  static #ProjectDAO = new ProjectDAO;
  static analyser = new AnalyseProjectInteractor;

  static setProjectDAO(dao){
    this.#ProjectDAO = dao;
  }

   static setAnalyser(analyser){
    this.analyser = analyser;
  }
  /**
   * Returns analysed metrics for a project with the project_id id.
   * @param outputBoundary
   * @param dao
   * @param id
   * @returns {Promise<{data: {total_users_quit: *, avg_duration_text: *, avg_duration_time: *}, status: string}|{data: *[], status: string}>}
   */

  async analyseProject(outputBoundary, dao, id) {
    if (dao instanceof ProjectsInterface) {
    try {
      this.analyser = new AnalyseProjectInteractor
      const project = await dao.getProjectByID(id);
      let text_transcripts = project.data.text_transcripts;
      let transcripts = project.data.transcripts;
      const response = {
        avg_duration_text: this.analyser.avgDurationTexts(text_transcripts),
        avg_duration_time: this.analyser.avgDurationTime(transcripts),
        total_users_quit_per_day: this.analyser.totalUsersForceQuitPerDay(text_transcripts, transcripts),
        reasons: this.analyser.checkReasons(text_transcripts, transcripts),
        num_satisfied_users: this.analyser.numSatisfiedUsers(text_transcripts, transcripts),
        num_unsatisfied_users: this.analyser.numUnsatisfiedUsers(text_transcripts, transcripts),
        total_convos_per_day: this.analyser.totalConvosPerDay(transcripts),
        reasons_per_day: this.analyser.checkReasonsPerDay(text_transcripts, transcripts),
        satisfaction: this.analyser.satisfaction(text_transcripts, transcripts)
      };
      console.log(response)
      outputBoundary.setOutput({status: "success",
          data: response})
    } catch (e) {
      console.error(`Unable to issue analyse project command, ${e}`)
      outputBoundary.setOutput({status: "failure", error: e.message})
    }
    } else {
      new Error("not an ProjectInterface");
    }
  }

}


