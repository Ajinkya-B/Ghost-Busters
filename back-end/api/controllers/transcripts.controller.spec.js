import TranscriptsController from "./transcripts.controller.js";
import TranscriptService from "../../services/transcript.service.js";
import TranscriptsCtrl from "../controllers/transcripts.controller.js"
import TextTranscriptDAO from "../../dao/textTranscriptsDAO.js";
import TranscriptDAO from "../../dao/transcriptsDAO.js"
const textDao = new TextTranscriptDAO()
const transcriptDao = new TranscriptDAO()
const TranscriptServiceInteractor = new TranscriptService()

jest.mock("../../services/transcript.service.js");

const mockResponse = () => {
    let res = {};
    res = {
        status: () => res,
        json: jest.fn().mockImplementation((obj) => obj),
        error: "error",
    };
    return res;
};

describe("TranscriptsController", () => {
    describe("Api Get Cleaned Transcripts", () => {
        it("Should correctly get transcripts", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getFilteredTranscripts = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            TranscriptsController.setTranscriptInteractor(TranscriptServiceInteractor)
            await TranscriptsController.apiGetCleanedTranscripts(transcriptDao,{}, res, {});
            expect(TranscriptServiceInteractor.getFilteredTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getFilteredTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetCleanedTranscripts(transcriptDao,{}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Get Text Transcripts", () => {
        it("Should correctly get text transcripts", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getFilteredTextTranscripts = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully created project",
            });
            await TranscriptsController.apiGetTextTranscripts(textDao, {}, res, {});
            expect(TranscriptServiceInteractor.getFilteredTextTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully created project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getFilteredTextTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetTextTranscripts(textDao,{}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api POST cleaned and text transcripts", () => {
        it("Should correctly delete a project ", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getVoiceFlowAPIData = jest.fn().mockReturnValue({});
            await TranscriptsController.addTranscripts(textDao,transcriptDao,{}, res, {});
            expect(TranscriptServiceInteractor.getVoiceFlowAPIData).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ status: "success" });
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptServiceInteractor.getVoiceFlowAPIData = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.addTranscripts(textDao,transcriptDao,{body:{project_name: "meow"}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ status: "failure" });
        });
    });
});