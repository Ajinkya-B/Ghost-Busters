import {getDurationTime, getDurationTexts, userForceQuit} from './AnalyseTranscriptInteractor.js'

export function avgDurationTexts(text_transcripts){
        if (text_transcripts.length > 0){
        let total_duration = 0;
        for (let text_transcript in text_transcripts){
            total_duration += getDurationTexts(text_transcript);
        }
        return total_duration/text_transcripts.length;
        }

        return 0;

    }

export function avgDurationTime(transcripts){
        let total_duration = 0;
        for (let transcript in transcripts){
            total_duration += getDurationTime(transcript);
        }
        return total_duration/transcripts.length;

    }

export function totalUsersForceQuit(transcripts){
        let i = 0;
        for (let transcript in transcripts){
            if (userForceQuit(transcript)){
                i += 1;
            }
        }
        return i;
    }








