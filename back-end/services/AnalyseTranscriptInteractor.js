export function userForceQuit(transcript){
        let l = transcript[2].length;
        if (transcript[2][l -1][0] === "end"){
            return False;
        } else return True;
    }

export function getLastText(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();

        let l = text_transcript.dialouge.length;
        console.log([text_transcript.dialouge[l-1].text, text_transcript.dialouge[l-1].speaker]);
        return [text_transcript.dialouge[l-1].text,  transcript.dialouge[l-1].speaker] ;
    }

export function getLastTextBot(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();

        let l = text_transcript.dialouge.length;
        for (let x = l - 1; x >=0; x --){
            if (text_transcript.dialouge[x].speaker == "bot"){
                console.log([text_transcript.dialouge[x].text, text_transcript.dialouge[x].speaker]);
                return text_transcript.dialouge[x];
            }
        }
        console.log("Bot doesn't speak during the conversation")
        return "Bot doesn't speak during the conversation"
    }

export function getLastTextHuman(text_transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();
        let l = text_transcript.dialouge.length;
        for (let x = l - 1; x >=0; x --){
            if (text_transcript[x].speaker == "human"){
                console.log([text_transcript.dialouge[x].text, text_transcript.dialouge[x].speaker]);
                return text_transcript.dialouge[x];
            }
        }
        console.log("Human doesn't speak during the conversation")
        return "Human doesn't speak during the conversation"
    }

 export function getDurationTexts(text_transcript){
        // let transcript =[];
        // transcript = await databaseFunctions.getTrim();

        let l = text_transcript[2].length;
        console.log(l);
        return l;
    }

export function getDurationTime(transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();

        let l = transcript[2].length;
        let end_time = new Date( transcript[2][l-1][1]) ;
        let start_time = new Date(transcript[0][1])
        console.log(Math.abs(end_time - start_time));
        return Math.abs(end_time - start_time);
    }
