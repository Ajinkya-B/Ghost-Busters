import {AnalyseProjectInteractor} from "./AnalyseProjectInteractor.js";
import {AnalyseTranscriptInteractor} from "./AnalyseTranscriptInteractor.js";

jest.mock("./AnalyseTranscriptInteractor.js");

let transcriptAnalyser;
let projectInteractor;

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

describe("AnalyseProjectInteractor", () => {
    beforeEach(() => {
        let newAnalyser = new AnalyseTranscriptInteractor;
        let newInteractor = new AnalyseProjectInteractor;
        newInteractor.setTranscriptAnalyser(newAnalyser);
        transcriptAnalyser = newAnalyser;
        projectInteractor = newInteractor;
        jest.clearAllMocks();


    });

    describe("Avg Duration Texts", () => {
        it('should correctly call transcript-analyser.getDurationTexts', async () => {

            transcriptAnalyser.getDurationTexts = jest
                .fn()
                .mockReturnValue(0)
                .mockReturnValueOnce(2)
                .mockReturnValueOnce(1);

            const result = await projectInteractor.avgDurationTexts(TEXT_TRANSCRIPTS);
            expect(transcriptAnalyser.getDurationTexts).toHaveBeenCalledWith(TEXT_TRANSCRIPTS[0].dialogue);
            expect(transcriptAnalyser.getDurationTexts).toHaveBeenCalledWith(TEXT_TRANSCRIPTS[1].dialogue);
            expect(result).toBe(1.5)
        });
        it('should  return 0 if an empty list is passed as an argument', function () {
            const result = projectInteractor.avgDurationTexts([]);
            expect(result).toBe(0);
        });
    });
    describe("Avg Duration Time", () => {
        it('should correctly call transcript-analyser.getDurationTime', async () => {

            transcriptAnalyser.getDurationTime = jest.fn()
                .mockReturnValueOnce(0)
                .mockReturnValueOnce(2);

            const result = await projectInteractor.avgDurationTime(TRANSCRIPTS);
            expect(transcriptAnalyser.getDurationTime).toHaveBeenCalledWith(TRANSCRIPTS[0].transcript_data);
            expect(result).toBe(1)
        });

        it('should  return 0 if an empty list is passed as an argument', function () {
            const result = projectInteractor.avgDurationTime([]);
            expect(result).toBe(0);
        });
    });

    describe("Third Quantile Time", () => {
        it('should correctly call getDurationTime for each transcript', function () {
            transcriptAnalyser.getDurationTime = jest.fn()
                .mockReturnValue(3)
                .mockReturnValueOnce(2)
                .mockReturnValueOnce(1);
            const result = projectInteractor.thirdQuantileTime(TRANSCRIPTS);
            expect(transcriptAnalyser.getDurationTime).toHaveBeenCalledTimes(2);
            expect(result).toBe(2);
        });
    });

    describe("Third Quantile Texts", () => {
        it('should correctly call getDurationTexts for each transcript', function () {
            transcriptAnalyser.getDurationTexts = jest.fn()
                .mockReturnValue(3)
                .mockReturnValueOnce(2)
                .mockReturnValueOnce(1);
            const result = projectInteractor.thirdQuantileTexts(TEXT_TRANSCRIPTS);
            expect(transcriptAnalyser.getDurationTexts).toHaveBeenCalledTimes(2);
            expect(result).toBe(2);
        });
    });

    describe("Total Conversations Per Day", () => {
        it('should correctly map each day with the conversations for that day', function () {

            const result = projectInteractor.totalConvosPerDay(TRANSCRIPTS);
            expect(result).toStrictEqual({"2010": 1, "2110": 1});
        });
    });

    describe("Total Users Force Quit Per Day", () => {
        it('should correctly map each day with the no. of users that quit that day', function () {
            transcriptAnalyser.userForceQuit = jest.fn()
                .mockReturnValue(true)
                .mockReturnValueOnce(true)
                .mockReturnValueOnce(false);

            const result = projectInteractor.totalUsersForceQuitPerDay(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(transcriptAnalyser.userForceQuit).toHaveBeenCalledTimes(2);
            expect(result).toStrictEqual({"2010": 1});
        });
    });

    describe("Satisfaction", () => {
        it('should correctly return satisfaction corresponding to the transcripts', function () {
            projectInteractor.totalConvosPerDay = jest.fn().mockReturnValue({"2010": 1, "2110": 1});
            projectInteractor.totalUsersForceQuitPerDay = jest.fn().mockReturnValue({"2010": 1});


            const result = projectInteractor.satisfaction(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(projectInteractor.totalUsersForceQuitPerDay).toHaveBeenCalledTimes(1);
            expect(projectInteractor.totalConvosPerDay).toHaveBeenCalledTimes(1);
            expect(result).toBe(0.5);
        });
    });

    describe("Number of Satisfied Users", () => {
        it('should correctly return number of satisfied users', function () {
            projectInteractor.totalConvosPerDay = jest.fn().mockReturnValue({"2010": 1, "2110": 1});
            projectInteractor.totalUsersForceQuitPerDay = jest.fn().mockReturnValue({"2010": 1});


            const result = projectInteractor.numSatisfiedUsers(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(projectInteractor.totalUsersForceQuitPerDay).toHaveBeenCalledTimes(1);
            expect(projectInteractor.totalConvosPerDay).toHaveBeenCalledTimes(1);
            expect(result).toBe(1);
        });
    });

    describe("Number of Unsatisfied Users", () => {
        it('should correctly return number of unsatisfied users', function () {
            projectInteractor.totalUsersForceQuitPerDay = jest.fn().mockReturnValue({"2010": 1});

            const result = projectInteractor.numUnsatisfiedUsers(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(projectInteractor.totalUsersForceQuitPerDay).toHaveBeenCalledTimes(1);
            expect(result).toBe(1);
        });


    });

    describe("Check Reasons", () => {
        it('should correctly map each reason to number of users that quit due to each.', function () {
            transcriptAnalyser.checkReason = jest
                .fn()
                .mockReturnValue(
                    ["privacy", "nosolution", "chatbotRepetition", "lengthyConvo", "other", "humaninteraction"])
                .mockReturnValueOnce(["privacy", "nosolution", "chatbotRepetition", "lengthyConvo"])
                .mockReturnValueOnce(["lengthyConvo", "other", "humaninteraction"]);

            const result = projectInteractor.checkReasons(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(transcriptAnalyser.checkReason).toHaveBeenCalledTimes(2);
            expect(result).toStrictEqual({
                "privacy": 1,
                "no_solution": 1,
                "human_interaction": 1,
                "lengthy_convo": 2,
                "chatbot_repetition": 1,
                "other": 1
            });
        });


    });

    describe("Check Reasons Per Day", () => {
        it('should correctly map each reason to number of users that quit due to each Per Day.', function () {
            transcriptAnalyser.checkReason = jest
                .fn()
                .mockReturnValue(
                    ["privacy", "nosolution", "chatbotRepetition", "lengthyConvo", "other", "humaninteraction"])
                .mockReturnValueOnce(["privacy", "nosolution", "chatbotRepetition", "lengthyConvo"])
                .mockReturnValueOnce(["lengthyConvo", "other", "humaninteraction"]);

            const result = projectInteractor.checkReasonsPerDay(TEXT_TRANSCRIPTS, TRANSCRIPTS);
            expect(transcriptAnalyser.checkReason).toHaveBeenCalledTimes(2);
            expect(result).toStrictEqual({
                "privacy": {"10/20": 1},
                "no_solution": {"10/20": 1},
                "human_interaction": {"10/21": 1},
                "lengthy_convo": {"10/20": 1, "10/21": 1},
                "chatbot_repetition": {"10/20": 1},
                "other": {"10/21": 1}
            });
        });
    });
})


