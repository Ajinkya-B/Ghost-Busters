


export default class AnalyseTranscript{
    static async getLastText(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();
        let l = text_transcript.length;
        console.log([text_transcript[l-1].text, text_transcript[l-1].speaker]);
        return [text_transcript[l-1].text,  transcript[l-1].speaker] ;
    }

    static async getLastTextBot(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();
        let l = text_transcript.length;
        for (let x = l - 1; x >=0; x --){
            if (text_transcript[x].speaker == "bot"){
                console.log([text_transcript[x].text, text_transcript[x].speaker]);
                return text_transcript[x];
            }
        }
        console.log("Bot doesn't speak during the conversation")
        return "Bot doesn't speak during the conversation"
    }

    static async getLastTextHuman(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();
        let l = text_transcript.length;
        for (let x = l - 1; x >=0; x --){
            if (text_transcript[x].speaker == "human"){
                console.log([text_transcript[x].text, text_transcript[x].speaker]);
                return text_transcript[x];
            }
        }
        console.log("Human doesn't speak during the conversation")
        return "Human doesn't speak during the conversation"
    }

    static async getDurationTexts(text_transcript){
        // let transcript =[];
        // transcript = await databaseFunctions.getTrim();
        let l = text_transcript.length;
        console.log(l);
        return l;
    }

    static async getDurationTime(transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();
        let l = transcript.length;
        let end_time = new Date( transcript[l-1].startTime) ;
        let start_time = new Date(transcript[0].startTime)
        console.log(Math.abs(end_time - start_time));
        return Math.abs(end_time - start_time);
    }
}
