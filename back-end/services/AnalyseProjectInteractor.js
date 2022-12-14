import {AnalyseTranscriptInteractor} from './AnalyseTranscriptInteractor.js'

export class AnalyseProjectInteractor {
    transcriptAnalyser = new AnalyseTranscriptInteractor;

    setTranscriptAnalyser(transcriptAnalyser) {
        this.transcriptAnalyser = transcriptAnalyser;
    }

    /**
     * Returns the average length of conversations of the transcripts.
     * @param text_transcripts
     * @returns {number}
     */
    avgDurationTexts(text_transcripts) {
        if (text_transcripts.length > 0) {
            let total_duration = 0;
            let l = text_transcripts.length;
            for (let j = 0; j < l; j++) {
                total_duration += this.transcriptAnalyser.getDurationTexts(
                    text_transcripts[j].dialogue);
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
    avgDurationTime(transcripts) {
        let total_duration = 0;
        let l = transcripts.length;
        if (l > 0){
        for (let j = 0; j < l; j++) {
            let transcript = transcripts[j];
            total_duration += this.transcriptAnalyser.getDurationTime(transcript.transcript_data);
        }
        return total_duration / transcripts.length;
    }
    return 0;
    }

    /**
     * Returns the third quantile ( 75 percentile) of the durations of the conversations.
     * @param transcripts
     * @returns {*}
     */
    thirdQuantileTime(transcripts) {
        let l = transcripts.length;
        let Q3 = Math.floor(3 * (l + 1) / 4);
        let durations = [];
        for (let j = 0; j < l; j++) {
            durations.push(this.transcriptAnalyser.getDurationTime(transcripts[j].transcript_data));
        }
        durations.sort(function (a, b) {
            return a - b
        });
        return durations[Q3 - 1];

    }

    /**
     * Returns the third quantile ( 75 percentile) of the length of the conversations.
     * @param text_transcripts
     * @returns {*}
     */
    thirdQuantileTexts(text_transcripts) {
        let l = text_transcripts.length;
        let Q3 = Math.floor(3 * (l + 1) / 4);
        let durations = [];
        for (let j = 0; j < l; j++) {
            durations.push(this.transcriptAnalyser.getDurationTexts(text_transcripts[j].dialogue));
        }
        durations.sort(function (a, b) {
            return a - b
        });
        return durations[Q3 - 1];

    }


    /**
     * Returns total conversations the chatbot had with users each day.
     * @param transcripts
     * @returns {Object}
     */
    totalConvosPerDay(transcripts) {
        let l = transcripts.length;
        let map = {};

        //map dates to #conversations that day.
        for (let j = 0; j < l; j++) {
            let transcript = transcripts[j];
            let date = new Date(transcript.transcript_data[0].startTime.toString().slice(0, 10));
            let key = date.getMonth().toString() + '/' + date.getDate().toString();
            if (map[key]) {
                map[key] += 1;
            } else {
                map[key] = 1
            }
        }
        return map;
    }


    /**
     * Returns the total numbers of users that force quit chats or weren't provided with satisfatory solutions per day.
     * @param text_transcripts
     * @param transcripts
     * @returns {Object}
     */
    totalUsersForceQuitPerDay(text_transcripts, transcripts) {
        let l = Math.min(text_transcripts.length, transcripts.length);
        let map = {};

        // parse through transcripts and map dates to #users quit that day
        for (let j = 0; j < l; j++) {
            let textTranscript = text_transcripts[j];
            let transcript = transcripts[j];
            let date = new Date(transcript.transcript_data[0].startTime.toString().slice(0, 10));
            let key = date.getMonth().toString() + '/' + date.getDate().toString();
            if (this.transcriptAnalyser.userForceQuit(textTranscript.dialogue)) {
                if (map[key]) {
                    map[key] += 1;
                } else {
                    map[key] = 1
                }
            }
        }
        return map;
    }

    /**
     * Return the satisfaction of this chatbot.
     * @param text_transcripts
     * @param transcripts
     * @returns {number}
     */
    satisfaction(text_transcripts, transcripts) {
        let usersQuit = this.totalUsersForceQuitPerDay(text_transcripts, transcripts);
        let usersQuitvalues = Object.values(usersQuit);
        let totalUsers = this.totalConvosPerDay(transcripts);
        let totalUsersvalues = Object.values(totalUsers);
        let sumUsersQuit = usersQuitvalues.reduce((b, a) => b + a, 0);
        let sumTotalUsers = totalUsersvalues.reduce((b, a) => b + a, 0);
        return (sumTotalUsers - sumUsersQuit) / sumTotalUsers;
    }

    /**
     * Return the number of satisfied users of this chatbot.
     * @param text_transcripts
     * @param transcripts
     * @returns {number}
     */
    numSatisfiedUsers(text_transcripts, transcripts) {
        let usersQuit = this.totalUsersForceQuitPerDay(text_transcripts, transcripts);
        let usersQuitValues = Object.values(usersQuit);
        let totalUsers = this.totalConvosPerDay(transcripts);
        let totalUsersValues = Object.values(totalUsers);
        let sumUsersQuit = usersQuitValues.reduce((b, a) => b + a, 0);
        let sumTotalUsers = totalUsersValues.reduce((b, a) => b + a, 0);

        return (sumTotalUsers - sumUsersQuit);
    }

    /**
     * Return the number of unsatisfied users of this chatbot.
     * @param text_transcripts
     * @param transcripts
     * @returns {number}
     */
    numUnsatisfiedUsers(text_transcripts, transcripts) {
        let usersQuit = this.totalUsersForceQuitPerDay(text_transcripts, transcripts);
        let usersQuitValues = Object.values(usersQuit);
        let sumUsersQuit = usersQuitValues.reduce((b, a) => b + a, 0);

        return (sumUsersQuit);
    }

    /**
     * Returns the number of users that quit corresponding to each reason
     * @param text_transcripts
     * @param transcripts
     * @returns {{other: number, human_interaction: number, no_solution: number, privacy: number, chatbot_repetition: number, lengthy_convo: number}}
     */
    checkReasons(text_transcripts, transcripts) {
        let l = Math.min(text_transcripts.length, transcripts.length);
        let Q3_text = this.thirdQuantileTexts(text_transcripts);
        let Q3_time = this.thirdQuantileTime(transcripts);
        let reasons = {
            "privacy": 0,
            "no_solution": 0,
            "human_interaction": 0,
            "lengthy_convo": 0,
            "chatbot_repetition": 0,
            "other": 0
        };


        // parse through transcripts to find reasons for each.
        for (let j = 0; j < l; j++) {

            let textTranscript = text_transcripts[j];
            let transcript = transcripts[j];


            // Find the reason for the user quitting the chat
            let temp = this.transcriptAnalyser.checkReason(
                textTranscript.dialogue, Q3_text, transcript.transcript_data, Q3_time);

            if (temp.includes("privacy")) {
                reasons.privacy += 1;

            }
            if (temp.includes("nosolution")) {
                reasons.no_solution += 1;

            }
            if (temp.includes("humaninteraction")) {
                reasons.human_interaction += 1;

            }
            if (temp.includes("lengthyConvo")) {
                reasons.lengthy_convo += 1;

            }
            if (temp.includes("chatbotRepetition")) {
                reasons.chatbot_repetition += 1;

            }
            if (temp.includes("other")) {
                reasons.other += 1;

            }
        }
        return reasons;
    }

    /**
     * Returns the no. of users that quit per day corresponding to each user.
     * @param text_transcripts
     * @param transcripts
     * @returns {{other: {}, human_interaction: {}, no_solution: {}, privacy: {}, chatbot_repetition: {}, lengthy_convo: {}}}
     */
    checkReasonsPerDay(text_transcripts, transcripts) {
        let l = Math.min(text_transcripts.length, transcripts.length);
        let Q3_text = this.thirdQuantileTexts(text_transcripts);
        let Q3_time = this.thirdQuantileTime(transcripts);

        let reasonsPerDay = {
            "privacy": {},
            "no_solution": {},
            "human_interaction": {},
            "lengthy_convo": {},
            "chatbot_repetition": {},
            "other": {}
        }

        //parse through transcripts
        for (let j = 0; j < l; j++) {

            let textTranscript = text_transcripts[j];
            let transcript = transcripts[j];

            // Get the date of the user quitting the chat
            let date = new Date(transcript.transcript_data[0].startTime.toString().slice(0, 10));
            let key = date.getMonth().toString() + '/' + date.getDate().toString();

            // Find the reason for the user quitting the chat
            let temp = this.transcriptAnalyser.checkReason(
                textTranscript.dialogue, Q3_text, transcript.transcript_data, Q3_time);

            // Map each reason to an array mapping dates to the users left on that day.
            if (temp.includes("privacy")) {
                let map = reasonsPerDay.privacy[key];
                if (map) {
                    reasonsPerDay.privacy[key] += 1;
                } else {
                    reasonsPerDay.privacy[key] = 1;
                }
            }
            if (temp.includes("nosolution")) {
                let map = reasonsPerDay.no_solution[key];
                if (map) {
                    reasonsPerDay.no_solution[key] += 1;
                } else {
                    reasonsPerDay.no_solution[key] = 1;
                }
            }
            if (temp.includes("humaninteraction")) {
                let map = reasonsPerDay.human_interaction[key];
                if (map) {
                    reasonsPerDay.human_interaction[key] += 1;
                } else {
                    reasonsPerDay.human_interaction[key] = 1;
                }
            }
            if (temp.includes("lengthyConvo")) {
                let map = reasonsPerDay.lengthy_convo[key];
                if (map) {
                    reasonsPerDay.lengthy_convo[key] += 1;
                } else {
                    reasonsPerDay.lengthy_convo[key] = 1;
                }
            }
            if (temp.includes("chatbotRepetition")) {
                let map = reasonsPerDay.chatbot_repetition[key];
                if (map) {
                    reasonsPerDay.chatbot_repetition[key] += 1;
                } else {
                    reasonsPerDay.chatbot_repetition[key] = 1;
                }
            }
            if (temp.includes("other")) {
                let map = reasonsPerDay.other[key];
                if (map) {
                    reasonsPerDay.other[key] += 1;
                } else {
                    reasonsPerDay.other[key] = 1;
                }
            }
        }
        return reasonsPerDay;
    }


}




