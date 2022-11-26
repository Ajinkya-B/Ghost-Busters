import { TextTranscripts } from "../schema/textTranscripts-schema.js";
import TextTranscriptsDAO from "./textTranscriptsDAO.js";

jest.mock("../schema/textTranscripts-schema.js");

let dao;

describe("TextTranscriptsDao", () => {
    beforeEach(async () => {
        const newDao = new TextTranscriptsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });

    it("Should correctly call find text transcripts", async () => {
        await dao.getTextTranscripts();
        expect(TextTranscripts.find).toHaveBeenCalled();
    });
});
