import AnalyseTranscript from "AnalyseTranscriptInteractor.js"

export default class AnalyseProject{
    constructor(project) {
        this.project = project;
        this.text_transcripts = project.text_transcripts;
        this.transcripts = project.transcripts

    }
    avgDurationTexts(){
        let total_duration = 0;
        for (let text_transcript in this.text_transcripts){
            total_duration += AnalyseTranscript.getDurationTexts(text_transcript);
        }
        return total_duration/this.text_transcripts.length;

    }

    avgDurationTime(){
        let total_duration = 0;
        for (let transcript in this.transcripts){
            total_duration += AnalyseTranscript.getDurationTime(transcript);
        }
        return total_duration/this.transcripts.length;

    }

    totalUsersForceQuit(){
        let i = 0;
        for (let transcript in this.transcripts){
            if (AnalyseTranscript.userForceQuit(transcript)){
                i += 1;
            }
        }
        return i;
    }






}