import { Transcripts } from "../schema/transcripts-schema.js";
import TranscriptsDAO from "./transcriptsDAO.js";

jest.mock("../schema/transcripts-schema.js");

let dao;

describe("TranscriptsDao", () => {
    beforeEach(async () => {
        const newDao = new TranscriptsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });

    it("Should correctly call find transcripts", async () => {
        await dao.getTranscripts();
        expect(Transcripts.find).toHaveBeenCalled();
    });
});
