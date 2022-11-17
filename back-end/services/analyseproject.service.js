import ProjectDAO from "../dao/projectsDAO.js";
import AnalyseProject from "./AnalyseProjectInteractor.js";
import AnalyseTranscript from "./AnalyseTranscriptInteractor.js";

export default class AnalyseProjectService {
    static async analyseProject(id) {
        try {
            const project = await ProjectDAO.getProjectByID(id);
            let text_transcripts = project.text_transcripts;
            let transcripts = project.transcripts;
            const reponse = {
                avg_duration_text: AnalyseProject.avgDurationTexts(text_transcripts),
                avg_duration_time: AnalyseProject.avgDurationTime(transcripts),
                total_users_quit: AnalyseProject.totalUsersForceQuit(transcripts)
            };

            return {
                status: "success",
                data: reponse
            };
        } catch (e) {
            return {
                status: "failure",
                data: [],
            };


        }
    }
}
