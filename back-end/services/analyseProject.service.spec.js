import AnalyseProjectService from "./analyseProject.service.js";
import {AnalyseProjectInteractor} from "./AnalyseProjectInteractor.js";
import ProjectsDAO from "../dao/projectsDAO.js";


jest.mock("./AnalyseProjectInteractor.js");
jest.mock("../dao/projectsDAO.js");
let dao;
let analyser;

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

        let newDao = new ProjectsDAO;

        AnalyseProjectService.setProjectDAO(newDao);
        dao = newDao;
        let newAnalyser = new AnalyseProjectInteractor;
        AnalyseProjectService.setAnalyser(newAnalyser);
        analyser = newAnalyser;
        dao.getProjectByID.mockReturnValueOnce(SAMPLE_PROJECT);


        // jest.clearAllMocks();


    });

    describe("Analyse Project", () => {
        it('should correctly call dao with the given arguments', async () => {

            await AnalyseProjectService.analyseProject(id);
            expect(dao.getProjectByID).toHaveBeenCalledWith(id);
        });

        it('should correctly call analyser.avgDurationTexts', async () => {

            analyser.avgDurationTexts = jest.fn().mockReturnValueOnce([]);
            const id = 1;
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.avgDurationTexts).toHaveBeenCalledWith(SAMPLE_PROJECT.data.text_transcripts);
        });

        it('should correctly call analyser.avgDurationTime', async () => {
            analyser.avgDurationTime = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.avgDurationTime).toHaveBeenCalledWith(SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.totalUsersForceQuitPerDay', async () => {

            analyser.totalUsersForceQuitPerDay = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.totalUsersForceQuitPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.checkReasons', async () => {

            analyser.checkReasons = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.checkReasons).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.numSatisfiedUsers', async () => {

            analyser.numSatisfiedUsers = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.numSatisfiedUsers).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.numUnsatisfiedUsers', async () => {

            analyser.numUnsatisfiedUsers = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.numUnsatisfiedUsers).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.totalConvosPerDay', async () => {

            analyser.totalConvosPerDay = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.totalConvosPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.transcripts);
        });


        it('should correctly call analyser.checkReasonsPerDay', async () => {

            analyser.checkReasonsPerDay = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.checkReasonsPerDay).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly call analyser.satisfaction', async () => {

            analyser.satisfaction = jest.fn().mockReturnValueOnce([]);
            await AnalyseProjectService.analyseProject(id);
            expect(analyser.satisfaction).toHaveBeenCalledWith(
                SAMPLE_PROJECT.data.text_transcripts,
                SAMPLE_PROJECT.data.transcripts);
        });

        it('should correctly throw a console error', async () => {
            console.error = jest.fn();
            analyser.satisfaction.mockImplementationOnce(() => {
                throw "error";
            });
            await AnalyseProjectService.analyseProject(id);
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue analyse project command, error"
            );

        });
    })
})