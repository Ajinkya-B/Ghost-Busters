import { Transcripts } from "../schema/transcripts-schema.js";
import TranscriptsDAO from "./transcriptsDAO.js";

jest.mock("../schema/transcripts-schema.js");
const QUERY = {
    filters : {project_id: "1234"}
}
const PROJECT_ID = "Project Name";
const TRANSCRIPT_DATA = ["Hello"];
let dao;

describe("TranscriptsDao", () => {
    beforeEach(async () => {
        const newDao = new TranscriptsDAO();
        dao = newDao;
        jest.clearAllMocks();
    });
    describe("getTranscripts", () => {
        it("Should correctly call find transcripts", async () => {
            await dao.getTranscripts();
            expect(Transcripts.find).toHaveBeenCalled();
        });

        it("Should correctly call find transcripts with project_id in the query", async () => {
            await dao.getTranscripts(QUERY);
            expect(Transcripts.find).toHaveBeenCalledWith(QUERY);
        });

        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            Transcripts.find.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.getTranscripts();
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue find command, error"
            );
        });
    });

    describe("Add Transcript", () => {
        it("Should correctly call create text transcripts", async () => {
            await dao.addTranscript(PROJECT_ID, TRANSCRIPT_DATA);
            expect(Transcripts.create).toHaveBeenCalledWith({
                project_id: PROJECT_ID,
                transcript_data: TRANSCRIPT_DATA,
            });
        });
        it("Should correctly throw a console error", async () => {
            console.error = jest.fn();
            Transcripts.create.mockImplementationOnce(() => {
                throw "error";
            });
            await dao.addTranscript();
            expect(console.error).toHaveBeenCalledWith(
                "Unable to issue create command, error"
            );
        });
    });
   
});
