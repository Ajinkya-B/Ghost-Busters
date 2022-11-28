import AnalyseTranscriptInteractor from './AnalyseTranscriptInteractor.js'

class AnalyseProjectInteractor {

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
                total_duration += AnalyseTranscriptInteractor.getDurationTexts(
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
        for (let j = 0; j < l; j++) {
            let transcript = transcripts[j];
            total_duration += AnalyseTranscriptInteractor.getDurationTime(transcript.transcript_data);
        }
        return total_duration / transcripts.length;
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
            durations.push(AnalyseTranscriptInteractor.getDurationTime(transcripts[j].transcript_data));
        }
        durations.sort(function (a, b) {
            return a - b
        });
        console.log(durations);
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
            durations.push(AnalyseTranscriptInteractor.getDurationTexts(text_transcripts[j].dialogue));
        }
        durations.sort(function (a, b) {
            return a - b
        });
        console.log(durations);
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
        let l = text_transcripts.length;
        let map = {};

        for (let j = 0; j < l; j++) {
            let textTranscript = text_transcripts[j];
            let transcript = transcripts[j];
            let date = new Date(transcript.transcript_data[0].startTime.toString().slice(0, 10));
            let key = date.getMonth().toString() + '/' + date.getDate().toString();
            if (AnalyseTranscriptInteractor.userForceQuit(textTranscript.dialogue)) {
                if (map[key]) {
                    map[key] += 1;
                } else {
                    map[key] = 1
                }
                console.log(map)
            }
        }
        return map;
    }

    /**
     * Return the number of satisfied users of this chatbot.
     * @param text_transcripts
     * @param transcripts
     * @returns {number}
     */
    numSatisfiedUsers(text_transcripts, transcripts){
        let usersQuit = this.totalUsersForceQuitPerDay(text_transcripts, transcripts);
        let usersQuitValues = Object.values(usersQuit);
        let totalUsers = this.totalConvosPerDay(transcripts);
        let totalUsersValues = Object.values(totalUsers);
        let sumUsersQuit = usersQuitValues.reduce((b, a) => b + a, 0);
        let sumTotalUsers = totalUsersValues.reduce((b, a) => b + a, 0);
        console.log(sumTotalUsers, sumUsersQuit);

        return (sumTotalUsers - sumUsersQuit);
    }

    /**
     * Return the number of unsatisfied users of this chatbot.
     * @param text_transcripts
     * @param transcripts
     * @returns {number}
     */
    numUnsatisfiedUsers(text_transcripts, transcripts){
        let usersQuit = this.totalUsersForceQuitPerDay(text_transcripts, transcripts);
        let usersQuitValues = Object.values(usersQuit);
        let sumUsersQuit = usersQuitValues.reduce((b, a) => b + a, 0);
        console.log(sumUsersQuit);

        return (sumUsersQuit);
    }

    /**
     * Return a 2 element list;
     * the first element contains the number of users that quit corresponding to each reason;
     * the second contains the number of users that quit corresponding to each reason and a date.
     * @param text_transcripts
     * @param transcripts
     * @returns {({other: number, chatbot_repetition: number, human_interaction: number, no_solution: number, privacy: number, lengthy_convo: number}|{other: {}, chatbot_repetition: {}, human_interaction: {}, no_solution: {}, privacy: {}, lengthy_convo: {}})[]}
     */
    checkReasons(text_transcripts, transcripts) {
        let l_text = text_transcripts.length;
        let Q3_text = this.thirdQuantileTexts(text_transcripts);
        let Q3_time = this.thirdQuantileTime(transcripts);
        let reasons = {
            "privacy": 0,
            "no_solution": 0,
            "human_interaction": 0,
            "lengthy_convo": 0,
            "chatbotRepetition": 0,
            "other": 0
        };

        let reasonsPerDay = {
            "privacy": {},
            "no_solution": {},
            "human_interaction": {},
            "lengthy_convo": {},
            "chatbot_repetition": {},
            "other": {}
        }

        for (let j = 0; j < l_text; j++) {

            let textTranscript = text_transcripts[j];
            let transcript = transcripts[j];

            // Get the date of the user quitting the chat
            let l = text_transcripts.length;
            let date = new Date(transcript.transcript_data[0].startTime.toString().slice(0, 10));
            let key = date.getMonth().toString() + '/' + date.getDate().toString();

            // Find the reason for the user quitting the chat
            let temp = AnalyseTranscriptInteractor.checkReason(textTranscript, Q3_text, transcript, Q3_time);

            if (temp.includes("privacy")) {
                reasons.privacy += 1;
                let map = reasonsPerDay.privacy[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
            if (temp.includes("nosolution")) {
                reasons.no_solution += 1;
                let map = reasonsPerDay.no_solution[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
            if (temp.includes("humaninteraction")) {
                reasons.human_interaction += 1;
                let map = reasonsPerDay.human_interaction[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
            if (temp.includes("lengthyConvo")) {
                reasons.lengthy_convo += 1;
                let map = reasonsPerDay.lengthy_convo[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
            if (temp.includes("chatbotRepetition")) {
                reasons.chatbotRepetition += 1;
                let map = reasonsPerDay.chatbot_repetition[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
            if (temp.includes("other")) {
                reasons.other += 1;
                let map = reasonsPerDay.other[key];
                if (map) { map += 1; }
                else { map = 1; }
            }
        }
        return [reasons, reasonsPerDay];
    }
}

export default new AnalyseProjectInteractor();
