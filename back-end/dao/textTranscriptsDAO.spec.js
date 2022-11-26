import { TextTranscripts } from "../schema/textTranscripts-schema.js";
import TextTranscriptsDAO from "./textTranscriptsDAO.js";

jest.mock("../schema/textTranscripts-schema.js");

let dao;
const PROJECT_ID = "Project Name";
const DIALOGUE = ["Hello"]

describe("TextTranscriptsDao", () => {
    beforeEach(async () => {
        const newDao = new TextTranscriptsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });

    describe("Get Text Transcripts", () => {
        it("Should correctly call find text transcripts", async () => {
            await dao.getTextTranscripts();
            expect(TextTranscripts.find).toHaveBeenCalled();
        });
         it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            TextTranscripts.find.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.getTextTranscripts();
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue find command, error"
            );
         });
    });

    describe("Add Text Transcripts", () => {
        it("Should correctly call create text transcripts", async () => {
            await dao.addTextTranscript(PROJECT_ID, DIALOGUE);
            expect(TextTranscripts.create).toHaveBeenCalledWith({
                project_id: PROJECT_ID,
                dialogue: DIALOGUE,
            });
        });
        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            TextTranscripts.create.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.addTextTranscript();
            expect(console.error).toHaveBeenCalledWith(
              "Unable to issue create command, error"
            );
        });
    });
    
});
