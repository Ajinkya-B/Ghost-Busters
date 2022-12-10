import TranscriptsController from "./transcripts.controller.js";
import { OutputBoundaryInterface } from "../../interfaces/output-boundary-interface.js";
import { InputBoundaryInterface } from "../../interfaces/input-boundary-interface.js";
import TextTranscriptDAO from "../../dao/textTranscriptsDAO.js";
import TranscriptDAO from "../../dao/transcriptsDAO.js"

jest.mock("../../services/transcript.service.js");
jest.mock("../../interfaces/input-boundary-interface.js");
jest.mock("../../interfaces/output-boundary-interface.js");
jest.mock("../../helpers/outputDataBoundary.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn().mockImplementation((obj) => obj),
        error: "error",
    };
    return res;
};

let interactor;
let outputBoundary;
let cleanedDao;
let textDao;


describe("TranscriptsController", () => {
    describe("Set Output Boundary", () => {
        it('should correctly throw an error', function () {
            outputBoundary = new InputBoundaryInterface();
            const t = () => {
                TranscriptsController.setOutputBoundary(outputBoundary)
            }
            expect(t).toThrow(Error("not an OutputBoundary"))

        });
    });

    describe("Set Transcript Interactor", () => {
        it('should correctly throw an error', function () {
            interactor = new OutputBoundaryInterface();
            const t = () => {
                TranscriptsController.setTranscriptInteractor(interactor);
            }
            expect(t).toThrow(Error("not an InputBoundary"))

        });
    });

    beforeEach(() => {
        outputBoundary = OutputBoundaryInterface;
        interactor = new InputBoundaryInterface();
        TranscriptsController.setTranscriptInteractor(interactor);
        TranscriptsController.setOutputBoundary(outputBoundary);
        cleanedDao = new TranscriptDAO();
        textDao = new TextTranscriptDAO();
        jest.clearAllMocks();
    });

    describe("Api Get Cleaned Transcripts", () => {
        it("Should correctly get transcripts", async () => {
            const res = mockResponse();
            interactor.getFilteredTranscripts = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await TranscriptsController.apiGetCleanedTranscripts(cleanedDao, {}, res, {});
            expect(interactor.getFilteredTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.getFilteredTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetCleanedTranscripts(cleanedDao,{}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Get Text Transcripts", () => {
        it("Should correctly get text transcripts", async () => {
            const res = mockResponse();
            interactor.getFilteredTextTranscripts = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully created project",
            });
            await TranscriptsController.apiGetTextTranscripts(textDao, {}, res, {});
            expect(interactor.getFilteredTextTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully created project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.getFilteredTextTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetTextTranscripts(textDao,{}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api POST cleaned and text transcripts", () => {
        it("Should correctly delete a project ", async () => {
            const res = mockResponse();
            interactor.getVoiceFlowAPIData = jest.fn().mockImplementation((obj) => obj);
            outputBoundary.getOutput = jest.fn().mockReturnValue({status: 200, data: "HEHE"});
            await TranscriptsController.addTranscripts(textDao, cleanedDao,{}, res, {});
            expect(interactor.getVoiceFlowAPIData).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("HEHE");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            interactor.getVoiceFlowAPIData = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.addTranscripts(textDao, cleanedDao,{body:{project_name: "meow"}}, res, {});
            expect(res.json).toHaveBeenCalledWith({error: "e"});
        });
    });
});