import * as checkReasons from "./checkReasonsInteractor.js";
import * as helper from "../helpers/analyseProjectHelpers.js";

jest.mock("../helpers/analyseProjectHelpers.js");

const DIALOGUE_1 =
    [
        {
            speaker: "bot",
            text: "Hello there! Welcome to Ghosters Bank."
        },
        {
            speaker: "bot",
            text: "How can I help you today?"
        },
        {
            speaker: "human",
            text: "talk to agent"
        },
        {
            speaker: "bot",
            text: "please provide your email"
        },
        {
            speaker: "human",
            text: "not comfortable"
        },
        {
            speaker: "bot",
            text: "sorry can't help you"
        }]

const DIALOGUE_2 = [
    {
        speaker: "bot",
        text: "Hello there! Welcome to Ghosters Bank."
    },
    {
        speaker: "bot",
        text: "How can I help you today?"
    },
    {
        speaker: "human",
        text: "change password"
    },
    {
        speaker: "bot",
        text: "How can I help you today?"
    },
    {
        speaker: "human",
        text: "change password"
    }]

const TRANSCRIPT_DATA_1 = [
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

const TRANSCRIPT_DATA_2 = [
    {
        type: "launch",
        startTime: "2022-11-21T03:33:09.991Z",
        format: "launch"
    },
    {
        type: "end",
        startTime: "2022-11-21T03:33:29.177Z",
        format: "trace",
        payload: {path: "reprompt"}
    }]

describe("CheckReasonsInteractor", () => {
    describe("Is Privacy Concern", () => {
        it('should return true when dialogues contain atleast one keyword', function () {
            const result = checkReasons.isPrivacyConcern(DIALOGUE_1);
            expect(result).toBe(true);

        });

        it('should return false when dialogues does not contain any keyword', function () {
            const result = checkReasons.isPrivacyConcern(DIALOGUE_2);
            expect(result).toBe(false);

        });
    });

    describe("Is No Solution", () => {
        it('should return true when dialogues contain atleast one keyword', function () {
            const result = checkReasons.isNoSolution(DIALOGUE_1);
            expect(result).toBe(true);

        });

        it('should return false when dialogues does not contain any keyword', function () {
            const result = checkReasons.isNoSolution(DIALOGUE_2);
            expect(result).toBe(false);
        });
    });

    describe("Is Human Interactionn", () => {
        it('should return true when dialogues contain atleast one keyword', function () {
            const result = checkReasons.isHumanInteraction(DIALOGUE_1);
            expect(result).toBe(true);

        });

        it('should return false when dialogues does not contain any keyword', function () {
            const result = checkReasons.isHumanInteraction(DIALOGUE_2);
            expect(result).toBe(false);
        });
    });

    describe("Is Lengthy Convo", () => {
        it('should return true when duration is greater than third quantile', function () {
            const result = checkReasons.isLengthyConvo(5, 2, 155, 130);
            expect(result).toBe(true);

        });

        it('should return false when duration is lower than third quantile', function () {
            const result = checkReasons.isLengthyConvo(5, 9, 130, 129);
            expect(result).toBe(false);
        });
    });

    describe("Is Chatbot Repetition", () => {
        it('should return true when transcript data contains "reprompt" and ' +
            'dialogues contains duplicates', function () {
            helper.hasDuplicates = jest.fn().mockReturnValueOnce(true);
            const result = checkReasons.isChatbotRepetition(DIALOGUE_2, TRANSCRIPT_DATA_2);
            expect(result).toBe(true);

        });

        it('should return false when transcript data does not contain "reprompt" ', function () {
            helper.hasDuplicates = jest.fn().mockReturnValueOnce(true);
            const result = checkReasons.isChatbotRepetition(DIALOGUE_2, TRANSCRIPT_DATA_1);
            expect(helper.hasDuplicates).toHaveBeenCalledTimes(0);
            expect(result).toBe(false);
        });

        it('should return false when transcript data contains "reprompt" ' +
            'but dialouges does not contain duplicates', function () {
            helper.hasDuplicates = jest.fn().mockReturnValueOnce(false);
            const result = checkReasons.isChatbotRepetition(DIALOGUE_1, TRANSCRIPT_DATA_2);
            expect(helper.hasDuplicates).toHaveBeenCalledTimes(1);
            expect(result).toBe(false);
        });
    });

})