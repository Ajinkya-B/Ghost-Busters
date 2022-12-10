export default class transcriptDataFormatter {

    /**
     * Cleans up and formats raw transcript data
     * @param {Array} transcript
     * @returns
     */
    static cleanData(transcript) {
        let res = [];
        let block;

        transcript.forEach(function (node) {
            block = {
                type: node.type,
                startTime: node.startTime,
                format: node.format,
                payload: node.payload.payload,
            };
            res.push(block);
        });
        return res;
    }

    // This function helps the use case format the data from the api call, it returns the text data
    // from each individual transcript
    static cleanTextTranscript(transcipt) {
        try {
            let res = [];
            let tempBotChat;
            let question;

            // this checks if the data contains either text or an intent from the user, it captures it in the proper format
            // and returns it to the service layer in the form of an array
            transcipt.forEach(function (step) {
                let data;

                //Checks if the current item in the list either contains a text object or intent object
                //If it does then we have text that must be added to the database
                if (step.payload && (step.payload.type === "text" || step.payload.type === "intent")) {
                    if (step.payload.payload && step.payload.payload.message) {
                        question = String(step.payload.payload.message);
                        // Checks if current block is said my a bot
                        if (!question.includes("audio")) {
                            tempBotChat = question
                            if (tempBotChat !== "") {
                                data = {
                                    speaker: "bot",
                                    text: tempBotChat,
                                };
                                res.push(data);
                            }
                        }
                    }
                    //Checks if the current block was said by a human
                    if (step.payload.payload.query) {
                        let answer = String(step.payload.payload.query);
                        data = {
                            speaker: "human",
                            text: answer,
                        };
                        res.push(data);
                    }
                }
                // }
            });
            return res;
        } catch (e) {
            throw e;

        }

    }

}