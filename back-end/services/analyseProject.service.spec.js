import AnalyseProjectService from "./analyseProject.service.js";
import {AnalyseProjectInteractor} from "./AnalyseProjectInteractor.js";
import {ProjectsInterface} from "../interfaces/projects-interface.js";
import {OutputBoundaryInterface} from "../interfaces/output-boundary-interface.js";

jest.mock("../interfaces/input-boundary-interface.js")
jest.mock("../interfaces/projects-interface.js")
jest.mock("./AnalyseProjectInteractor.js");
jest.mock("../dao/projectsDAO.js");
jest.mock("../interfaces/output-boundary-interface.js");

let dao;
let projectInteractor;
let analyser;
let outputBoundary;

const id = 1;


const SAMPLE_PROJECT = {data: {
    id: "1",
    project_name: "Test",
    project_id: "1234",
    api_key: "abcd",
    transcripts: [],
    text_transcripts: []}
}


describe("AnalyseProjectService", () => {
    beforeEach(() => {

        outputBoundary = OutputBoundaryInterface;
        dao = new ProjectsInterface;
        projectInteractor = new AnalyseProjectInteractor;


        analyser = new AnalyseProjectService;
        analyser.setAnalyser(projectInteractor);

        dao.getProjectByID = jest.fn().mockReturnValueOnce(SAMPLE_PROJECT);
        jest.clearAllMocks();


    });

    describe("Analyse Project", () => {
        it('should correctly call dao with the given arguments', async () => {

            await analyser.analyseProject(outputBoundary, dao, id);
            expect(dao.getProjectByID).toHaveBeenCalledWith(id);
        });

        it('should correctly call projectInteractor.avgDurationTexts', async () => {


            projectInteractor.avgDurationTexts = jest.fn().mockReturnValueOnce([]);
            const id = 1;
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.avgDurationTexts).toHaveBeenCalledWith(SAMPLE_PROJECT.data.text_transcripts);
        });

        it('should correctly call projectInteractor.avgDurationTime', async () => {
            projectInteractor.avgDurationTime = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.avgDurationTime).toHaveBeenCalledWith(SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.totalUsersForceQuitPerDay', async () => {

            projectInteractor.totalUsersForceQuitPerDay = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.totalUsersForceQuitPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.checkReasons', async () => {

            projectInteractor.checkReasons = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.checkReasons).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.numSatisfiedUsers', async () => {

            projectInteractor.numSatisfiedUsers = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.numSatisfiedUsers).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.numUnsatisfiedUsers', async () => {

            projectInteractor.numUnsatisfiedUsers = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.numUnsatisfiedUsers).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.totalConvosPerDay', async () => {

            projectInteractor.totalConvosPerDay = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.totalConvosPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.transcripts);
        });


        it('should correctly call projectInteractor.checkReasonsPerDay', async () => {

            projectInteractor.checkReasonsPerDay = jest.fn().mockReturnValueOnce([]);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.checkReasonsPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call projectInteractor.satisfaction', async () => {

            projectInteractor.satisfaction = jest.fn().mockReturnValueOnce(123);
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(projectInteractor.satisfaction).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly throw a console error', async () => {
            console.error = jest.fn();
            projectInteractor.satisfaction.mockImplementationOnce(() => {
                throw "error";
            });
            await analyser.analyseProject(outputBoundary, dao, id);
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue analyse project command, error"
            );

        });
    })
})