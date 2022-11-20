import {getDurationTime, getDurationTexts, userForceQuit, checkReason} from './AnalyseTranscriptInteractor.js'

/**
 * Returns the average length of conversations of the transcripts.
 * @param text_transcripts
 * @returns {number}
 */
export function avgDurationTexts(text_transcripts) {
    if (text_transcripts.length > 0) {
        let total_duration = 0;
        let l = text_transcripts.length;
        for (let j = 0; j < l; j++) {
            total_duration += getDurationTexts(text_transcripts[j].dialogue);
        }
        return total_duration / l;
    }

    return 0;

}

/**
 * Return the average duration of conversations of the transcripts.
 * @param transcripts
 * @returns {number}
 */
export function avgDurationTime(transcripts) {
    let total_duration = 0;
    let l = transcripts.length;
    for (let j = 0; j < l; j++) {
        let transcript = transcripts[j];
        total_duration += getDurationTime(transcript.transcript_data);
    }
    return total_duration / transcripts.length;
}

/**
 * Returns the total numbers of users that force quit chats or weren't provided with satisfatory solutions.
 * @param text_transcripts
 * @returns {number}
 */
export function totalUsersForceQuit(text_transcripts) {
    let i = 0;
    let l = text_transcripts.length;
    for (let j = 0; j < l; j++) {

        let transcript = text_transcripts[j];
        if (userForceQuit(transcript.dialogue)) {
            i = i + 1;
            console.log(i);
        }
    }
    return i;
}

/**
 * Return the no.of users that quit corresponding to each reason.
 * @param text_transcripts
 * @returns {{other: number, human_interaction: number, no_solution: number, privacy: number}}
 */
export function checkReasons(text_transcripts) {
    let l = text_transcripts.length;
    let reasons = {
        "privacy": 0,
        "no_solution": 0,
        "human_interaction": 0,
        "other": 0
    }
    for (let j = 0; j < l; j++) {

        let transcript = text_transcripts[j];
        let temp = checkReason(transcript);
        if (temp.includes("privacy")) {
            reasons.privacy += 1;
        }
        if (temp.includes("nosolution")) {
            reasons.no_solution += 1;
        }
        if ( temp.includes("humaninteraction")){
            reasons.human_interaction += 1;
        }
        if ( temp.includes("other")){
            reasons.other += 1;
        }
    }
    return reasons;
}

