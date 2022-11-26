import {isPrivacyConcern, isNoSolution, isHumanInteraction, isLengthyConvo} from "./checkReasonsInterctor.js"

/**
 * Returns whether the user force quit a chat or wasn't satisfied.
 * @param text_transcript
 * @returns {boolean}
 */
export function userForceQuit(text_transcript) {
    const keywords = ["thank you", "next time", "goodbye", "see you soon", "good day", "exit"]
    let l = text_transcript.length;
    let text = text_transcript[l - 1].text.toLowerCase();
    console.log(text);
    if (keywords.some(keyword => text.includes(keyword))) {
        console.log(text);
        return false;
    }
    return true;

    // let l = transcript.length;
    // try {
    //     if (transcript[l - 1].payload.type === "exit") {
    //         return false;
    //     }
    //     return true;
    // } catch (e) {
    //     return true;
    //
    // }
}

/**
 * Returns the last message of the conversation along with the speaker of that message.
 * @param text_transcript
 * @returns {*[]}
 */
export function getLastText(text_transcript) {
    // let transcript = [];
    // transcript = await databaseFunctions.getTrim();

    let l = text_transcript.dialouge.length;
    console.log([text_transcript.dialouge[l - 1].text, text_transcript.dialouge[l - 1].speaker]);
    return [text_transcript.dialouge[l - 1].text, transcript.dialouge[l - 1].speaker];
}

/**
 * Returns the last text spoken by the bot.
 * @param text_transcript
 * @returns {string|*}
 */
export function getLastTextBot(text_transcript) {
    // let transcript = [];
    // transcript = await databaseFunctions.getTrim();

    let l = text_transcript.dialouge.length;
    for (let x = l - 1; x >= 0; x--) {
        if (text_transcript.dialouge[x].speaker == "bot") {
            console.log([text_transcript.dialouge[x].text, text_transcript.dialouge[x].speaker]);
            return text_transcript.dialouge[x];
        }
    }
    console.log("Bot doesn't speak during the conversation")
    return "Bot doesn't speak during the conversation"
}

/**
 * Returns the last text spoken by the human.
 * @param text_transcript
 * @returns {string|*}
 */
export function getLastTextHuman(text_transcript) {
    // let transcript = [];
    // transcript = await databaseFunctions.getTrim();
    let l = text_transcript.dialouge.length;
    for (let x = l - 1; x >= 0; x--) {
        if (text_transcript.dialogue[x].speaker == "human") {
            console.log([text_transcript.dialogue[x].text, text_transcript.dialogue[x].speaker]);
            return text_transcript.dialogue[x];
        }
    }
    console.log("Human doesn't speak during the conversation")
    return "Human doesn't speak during the conversation"
}

/**
 * Returns the length of the conversation between bot and human in no.of texts exchanged.
 * @param text_transcript
 * @returns {*}
 */
export function getDurationTexts(text_transcript) {
    // let transcript =[];
    // transcript = await databaseFunctions.getTrim();

    let l = text_transcript.length;
    return l;
}

/**
 * Returns the duration of the conversation between bot and human in milliseconds.
 * @param transcript
 * @returns {number}
 */
export function getDurationTime(transcript) {
    // let transcript = [];
    // transcript = await databaseFunctions.getTrim();

    const l = transcript.length;

    let end_time = Date.parse(transcript[l - 1].startTime);
    let start_time = Date.parse(transcript[0].startTime);
    // console.log(start_time);
    // console.log(Math.abs(end_time - start_time));
    return Math.abs(end_time - start_time);
}


/**
 * Return the possible reasons why user left the chat.
 * @param text_transcript
 * @returns {*[]}
 */
export function checkReason(text_transcript, Q3_text, transcript, Q3_time){
    let dialogues = text_transcript.dialogue;
    let l_texts = getDurationTexts(dialogues);
    let l_time = getDurationTime(transcript.transcript_data);
    let reasons = [];
    if (userForceQuit(dialogues)){
        if (isPrivacyConcern(dialogues)){
            reasons.push("privacy");
        }
        if (isNoSolution(dialogues)){
            reasons.push("nosolution");
        }
        if (isHumanInteraction(dialogues)){
            reasons.push("humaninteraction");
            }
        if (isLengthyConvo(l_texts, Q3_text, l_time, Q3_time)){
            reasons.push("lengthyConvo")
        }
        if (reasons.length == 0){
            reasons.push("other");
        }

    }
    return reasons;
}


