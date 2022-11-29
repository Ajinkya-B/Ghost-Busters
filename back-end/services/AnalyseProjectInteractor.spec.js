import {AnalyseProjectInteractor} from "./AnalyseProjectInteractor.js";
import {AnalyseTranscriptInteractor} from "./AnalyseTranscriptInteractor.js";
import ProjectsDAO from "../dao/projectsDAO.js";
import AnalyseProjectService from "./analyseProject.service.js";

jest.mock("./AnalyseTranscriptInteractor.js");

let transcriptAnalyser;
let projectInteractor;

const TEXT_TRANSCRIPTS = [{
    _id: "123",
    project_id: "456",
    dialogue: [
        {
            speaker: "bot",
            text: "Hello there! Welcome to Ghosters Bank."
        },
        {
            speaker: "bot",
            text: "How can I help you today?"
        }]}];

const TRANSCRIPTS = [ {
    _id: "123",
    project_id: "456",
    transcript_data: [
        {
            type: "launch",
            startTime: "2022-11-21T03:33:09.991Z",
            format: "launch"
        }]}];

describe("AnalyseProjectInteractor", () => {
    beforeEach(() => {
        let newAnalyser = new AnalyseTranscriptInteractor;
        let newInteractor = new AnalyseProjectInteractor;
        newInteractor.setTranscriptAnalyser(newAnalyser);
        transcriptAnalyser = newAnalyser;
        projectInteractor = newInteractor;
        // jest.clearAllMocks();


    });

    describe("Avg Duration Texts", () => {
        it('should correctly call transcript-analyser.getDurationTexts', async () => {

            transcriptAnalyser.getDurationTexts = jest.fn().mockReturnValueOnce(2);

            const result = await projectInteractor.avgDurationTexts(TEXT_TRANSCRIPTS);
            expect(transcriptAnalyser.getDurationTexts).toHaveBeenCalledWith(TEXT_TRANSCRIPTS[0].dialogue);
            expect(result).toBe(2)
        });

    });
})

