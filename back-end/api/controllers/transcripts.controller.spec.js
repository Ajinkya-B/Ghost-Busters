import TranscriptsController from "./transcripts.controller.js";
import TranscriptService from "../../services/transcript.service.js";

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
            TranscriptService.getFilteredTranscripts = jest.fn().mockReturnValue({
                status: 200,
                data: "meow",
            });
            await TranscriptsController.apiGetCleanedTranscripts({}, res, {});
            expect(TranscriptService.getFilteredTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("meow");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptService.getFilteredTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetCleanedTranscripts({}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api Get Text Transcripts", () => {
        it("Should correctly get text transcripts", async () => {
            const res = mockResponse();
            TranscriptService.getFilteredTextTranscripts = jest.fn().mockReturnValue({
                status: 200,
                data: "successfully created project",
            });
            await TranscriptsController.apiGetTextTranscripts({}, res, {});
            expect(TranscriptService.getFilteredTextTranscripts).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith("successfully created project");
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptService.getFilteredTextTranscripts = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.apiGetTextTranscripts({}, res, {});
            expect(res.json).toHaveBeenCalledWith({ error: "e" });
        });
    });

    describe("Api POST cleaned and text transcripts", () => {
        it("Should correctly delete a project ", async () => {
            const res = mockResponse();
            TranscriptService.getVoiceFlowAPIData = jest.fn().mockReturnValue({});
            await TranscriptsController.addClean({}, res, {});
            expect(TranscriptService.getVoiceFlowAPIData).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({ status: "success" });
        });

        it("Should correctly throw a error", async () => {
            const res = mockResponse();
            TranscriptService.getVoiceFlowAPIData = jest.fn().mockImplementation(() => {
                throw { message: "e" };
            });
            await TranscriptsController.addClean({body:{project_name: "meow"}}, res, {});
            expect(res.json).toHaveBeenCalledWith({ status: "failure" });
        });
    });
});