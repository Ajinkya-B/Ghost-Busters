import TranscriptsService from "./transcript.service.js";
import VoiceflowAPI from "../helpers/voiceflowAPI.js";
import transcriptDataFormatter from "../helpers/transcriptDataFormatter.js";
import { TranscriptInterface } from "../interfaces/transcript-interface.js";
import { TextTranscriptsInterface } from "../interfaces/textTranscripts-interface.js";
import { OutputBoundaryInterface } from "../interfaces/output-boundary-interface.js";

jest.mock("../interfaces/input-boundary-interface.js");
jest.mock("../interfaces/transcript-interface.js");
jest.mock("../interfaces/textTranscripts-interface.js");
jest.mock("../dao/transcriptsDAO.js");
jest.mock("../dao/textTranscriptsDAO.js");
jest.mock("../interfaces/output-boundary-interface.js");
jest.mock("../helpers/voiceflowAPI.js");

let cleanedDao;
let textDao;
let transcriptsService;
let outputBoundary;
let voiceflowAPI;

const QUERY1 = {
    project_id: "6382876295d15a6f70c40f06",
};
const FILTERS1 = {
    project_id: { $eq: QUERY1.project_id },
};

describe("TranscriptsService", () => {
    beforeEach(() => {
        outputBoundary = OutputBoundaryInterface;
        cleanedDao = new TranscriptInterface();
        textDao = new TextTranscriptsInterface();
        transcriptsService = new TranscriptsService();
        voiceflowAPI = new VoiceflowAPI();
        jest.clearAllMocks();
    });

    describe("Get Filtered Cleaned Transcripts", () => {
        it("should correctly call dao with no filters", async () => {
        cleanedDao.getTranscripts.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        await transcriptsService.getFilteredTranscripts(
            outputBoundary,
            cleanedDao,
            {}
        );
        expect(cleanedDao.getTranscripts).toHaveBeenCalledWith({ filters: {} });
        });
        it("should correctly call dao with name filter query", async () => {
        cleanedDao.getTranscripts.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        await transcriptsService.getFilteredTranscripts(
            outputBoundary,
            cleanedDao,
            QUERY1
        );
        expect(cleanedDao.getTranscripts).toHaveBeenCalledWith({
            filters: FILTERS1,
        });
        });
        it("should correctly throw an error", async () => {
        cleanedDao.getTranscripts.mockImplementationOnce(() => {
            throw Error;
        });
        await transcriptsService.getFilteredTranscripts(
            outputBoundary,
            cleanedDao,
            {}
        );
        expect(cleanedDao.getTranscripts).toHaveBeenCalledWith({ filters: {} });
        });
    });

    describe("Get Filtered Text Transcripts", () => {
        it("should correctly call dao with no filters", async () => {
        textDao.getTextTranscripts.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        await transcriptsService.getFilteredTextTranscripts(
            outputBoundary,
            textDao,
            {}
        );
        expect(textDao.getTextTranscripts).toHaveBeenCalledWith({ filters: {} });
        });
        it("should correctly call dao with name filter query", async () => {
        textDao.getTextTranscripts.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        await transcriptsService.getFilteredTextTranscripts(
            outputBoundary,
            textDao,
            QUERY1
        );
        expect(textDao.getTextTranscripts).toHaveBeenCalledWith({
            filters: FILTERS1,
        });
        });
        it("should correctly throw an error", async () => {
        textDao.getTextTranscripts.mockImplementationOnce(() => {
            throw Error;
        });
        await transcriptsService.getFilteredTextTranscripts(
            outputBoundary,
            textDao,
            {}
        );
        expect(textDao.getTextTranscripts).toHaveBeenCalledWith({ filters: {} });
        });
    });

    describe("Voiceflow call", () => {
        it("should correctly call api with the given arguments", async () => {
        VoiceflowAPI.getData.mockImplementationOnce((t1, t2) => {
            return "meow";
        });
        await transcriptsService.getVoiceFlowAPIData(outputBoundary, {}, {});
        expect(VoiceflowAPI.getData).toHaveBeenCalled();
        });
        it("should correctly throw an error", async () => {
        VoiceflowAPI.getData.mockImplementationOnce((t1, t2) => {
            throw Error;
        });
        await transcriptsService.getVoiceFlowAPIData(outputBoundary, {}, {});
        expect(VoiceflowAPI.getData).toHaveBeenCalled();
        });
    });

    describe("Add Transcripts", () => {
        it("should correctly call dao with the given arguments", async () => {
        jest
            .spyOn(transcriptsService, "flushCollection")
            .mockImplementationOnce(() => {
            return null;
            });
        cleanedDao.addTranscript.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        textDao.addTextTranscript.mockReturnValueOnce({
            status: 200,
            data: "meow",
        });
        jest
            .spyOn(transcriptDataFormatter, "cleanData")
            .mockImplementationOnce((temp) => {
            return temp;
            });
        jest
            .spyOn(transcriptDataFormatter, "cleanTextTranscript")
            .mockImplementationOnce((temp) => {
            return temp;
            });

        await transcriptsService.addTranscripts(textDao, cleanedDao, {
            data: ["this"],
        });
        expect(cleanedDao.addTranscript).toHaveBeenCalledWith(undefined, "this");
        expect(textDao.addTextTranscript).toHaveBeenCalledWith(undefined, "this");
        });
    });
});
