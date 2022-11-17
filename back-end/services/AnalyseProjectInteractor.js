import AnalyseTranscript from "./AnalyseTranscriptInteractor.js"

export default class AnalyseProject{

    static avgDurationTexts(text_transcripts){
        if (text_transcripts.length > 0){
        let total_duration = 0;
        for (let text_transcript in text_transcripts){
            total_duration += AnalyseTranscript.getDurationTexts(text_transcript);
        }
        return total_duration/text_transcripts.length;}

        return 0;

    }

    static avgDurationTime(transcripts){
        let total_duration = 0;
        for (let transcript in transcripts){
            total_duration += AnalyseTranscript.getDurationTime(transcript);
        }
        return total_duration/transcripts.length;

    }

    static totalUsersForceQuit(transcripts){
        let i = 0;
        for (let transcript in transcripts){
            if (AnalyseTranscript.userForceQuit(transcript)){
                i += 1;
            }
        }
        return i;
    }








}