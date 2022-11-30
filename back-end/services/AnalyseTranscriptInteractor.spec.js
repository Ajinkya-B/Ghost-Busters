import {AnalyseTranscriptInteractor} from "./AnalyseTranscriptInteractor.js";
import * as checkReasons from "./checkReasonsInteractor.js"

jest.mock("./checkReasonsInteractor.js");

let transcriptAnalyser;

const TEXT_TRANSCRIPTS = [{
    _id: "123",
    project_id: "456",
    dialogue: [
        {
            speaker: "bot",
            text: "Hello there! Welcome to Ghosters Bank."
        },
        {
            speaker: "bot",
            text: "How can I help you today?"
        }]
}, {
    _id: "456",
    project_id: "789",
    dialogue: [
        {
            speaker: "bot",
            text: "Hello there! Welcome to Ghosters Bank."
        },
        {
            speaker: "bot",
            text: "Thank you!"
        }]
}];

const TRANSCRIPTS = [{
    _id: "123",
    project_id: "456",
    transcript_data: [
        {
            type: "launch",
            startTime: "2022-11-21T03:33:09.991Z",
            format: "launch"
        },
        {
            type: "end",
            startTime: "2022-11-21T03:33:29.177Z",
            format: "trace"
        }]
},
    {
        _id: "456",
        project_id: "789",
        transcript_data: [
            {
                type: "launch",
                startTime: "2022-11-22T03:33:09.991Z",
                format: "launch"
            }]
    }];

describe("AnalyseTranscriptInteractor", () => {
    beforeEach(() => {
        transcriptAnalyser = new AnalyseTranscriptInteractor;
        jest.clearAllMocks();


    });

    describe("User Force Quit", () => {
        it('should correctly determine when a user force quits a chat', function () {
            const result = transcriptAnalyser.userForceQuit(TEXT_TRANSCRIPTS[0].dialogue);
            expect(result).toBe(true);
        });

        it('should correctly determine when a user DOES NOT force quit a chat', function () {
            const result = transcriptAnalyser.userForceQuit(TEXT_TRANSCRIPTS[1].dialogue);
            expect(result).toBe(false);
        });
    });

    describe("Get Duration of Text Transcript", () => {
        it('should correctly return number of texts exchanged', function () {
            const result = transcriptAnalyser.getDurationTexts(TEXT_TRANSCRIPTS[0].dialogue);
            expect(result).toBe(2);

        });
    });

    describe("Get Duration Time", () => {
        it('should correctly return length of conversation in milliseconds', function () {
            const result = transcriptAnalyser.getDurationTime(TRANSCRIPTS[0].transcript_data);
            expect(result).toBe(19186);

        });
    });

    describe("Check Reason", () => {
        it('should return an empty array if user does not force quit chat', function () {
            transcriptAnalyser.userForceQuit = jest.fn().mockReturnValueOnce(false);
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toStrictEqual([]);

        });
        it('should correctly call isPrivacyConcern', function () {
            checkReasons.isPrivacyConcern = jest.fn().mockImplementationOnce(() => {return true});
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["privacy"]),);

        });

        it('should correctly call isLengthyConvo', function () {
            checkReasons.isLengthyConvo = jest.fn().mockImplementationOnce(() => {return true});
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["lengthyConvo"]),);

        });

        it('should correctly call isChatbotRepetition', function () {
            checkReasons.isChatbotRepetition = jest.fn().mockImplementationOnce(() => {return true});
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["chatbotRepetition"]),);

        });

        it('should correctly call isHumanInteraction', function () {
            checkReasons.isHumanInteraction = jest.fn().mockImplementationOnce(() => {return true});
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["humaninteraction"]),);

        });

        it('should correctly call isNoSolution', function () {
            checkReasons.isNoSolution = jest.fn().mockImplementationOnce(() => {return true});
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["nosolution"]),);

        });

        it('should correctly return ["other"] if none of the reasons match', function () {
            const result = transcriptAnalyser.checkReason(
                TEXT_TRANSCRIPTS[0].dialogue,2, TRANSCRIPTS[0].transcript_data, 19186);
            expect(result).toEqual(expect.arrayContaining(["other"]),);

        });

    });

})