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
 * Returns the third quantile ( 75 percentile) of the durations of the conversations.
 * @param transcripts
 * @returns {*}
 */
export function thirdQuantileTime(transcripts){
    let l = transcripts.length;
    let Q3 = Math.floor(3*(l + 1)/4);
    let durations = [];
    for (let j = 0; j < l; j++) {
        durations.push(getDurationTime(transcripts[j].transcript_data));
    }
    durations.sort(function (a, b){return a-b});
    console.log(durations);
    return durations[Q3 - 1];

}

/**
 * Returns the third quantile ( 75 percentile) of the length of the conversations.
 * @param text_transcripts
 * @returns {*}
 */
export function thirdQuantileTexts(text_transcripts){
    let l = text_transcripts.length;
    let Q3 = Math.floor(3*(l + 1)/4);
    let durations = [];
    for (let j = 0; j < l; j++) {
        durations.push(getDurationTexts(text_transcripts[j].dialogue));
    }
    durations.sort(function (a, b){return a-b});
    console.log(durations);
    return durations[Q3 - 1];

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
export function checkReasons(text_transcripts, transcripts) {
    let l_text = text_transcripts.length;
    let Q3_text = thirdQuantileTexts(text_transcripts);
    let Q3_time = thirdQuantileTime(transcripts);
    let reasons = {
        "privacy": 0,
        "no_solution": 0,
        "human_interaction": 0,
        "lengthy_convo": 0,
        "other": 0
    }
    for (let j = 0; j < l_text; j++) {

        let textTranscript = text_transcripts[j];
        let transcript = transcripts[j];

        let temp = checkReason(textTranscript, Q3_text, transcript, Q3_time);
        if (temp.includes("privacy")) {
            reasons.privacy += 1;
        }
        if (temp.includes("nosolution")) {
            reasons.no_solution += 1;
        }
        if ( temp.includes("humaninteraction")){
            reasons.human_interaction += 1;
        }
        if (temp.includes("lengthyConvo")){
            reasons.lengthy_convo += 1;
        }
        if ( temp.includes("other")){
            reasons.other += 1;
        }
    }
    return reasons;
}


