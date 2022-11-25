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
    it("Should correctly get transcripts", async () => {
        await dao.getTranscripts();
        expect(Transcripts.find).toHaveBeenCalled();
    });

    it("Should correctly get the right transcripts", async () => {
        const res = await dao.getTranscripts();
        console.log(res);
        expect(res !== []).toBe(true);
    });
});
