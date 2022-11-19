export function userForceQuit(text_transcript){
    const keywords = ["thank you", "next time", "goodbye", "see you soon", "good day", "exit"]
    let l = text_transcript.length;
    let text = text_transcript[l-1].text.toLowerCase();
    console.log(text);
    if (keywords.some(keyword => text.includes(keyword))){
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

        let l = text_transcript.length;
        return l;
    }

export function getDurationTime(transcript){
        // let transcript = [];
        // transcript = await databaseFunctions.getTrim();

        const l = transcript.length;

        let end_time = Date.parse( transcript[l-1].startTime) ;
        let start_time = Date.parse(transcript[0].startTime);
        // console.log(start_time);
        // console.log(Math.abs(end_time - start_time));
        return Math.abs(end_time - start_time);
    }
