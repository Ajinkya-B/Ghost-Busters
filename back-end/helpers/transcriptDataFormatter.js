
export default class transcriptDataFormatter {
  /**
   * Cleans up and formats raw transcipt data
   * @param {Array} transcript
   * @returns
   */
  static cleanData(transcript) {
    var res = [];
    var block;

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

  static cleanTextTranscript(transcipt) {
    try {
      var res = [];
      var tempBotChat;
      var question;
      transcipt.forEach(function (step) {
        if (step.payload) {
          if (step.payload.payload) {
            if (step.payload.payload.message) {
              question = String(step.payload.payload.message);
              // Checks if current block is said my a bot
              if (!question.includes("audio")) {
                tempBotChat = question.substring(
                  question.indexOf(">") + 1,
                  question.lastIndexOf("<")
                );
                if (tempBotChat !== "") {
                  var data = {
                    speaker: "bot",
                    text: tempBotChat,
                  };
                  res.push(data);
                }
              }
            }
            if (step.payload.payload.query) {
              var answer = String(step.payload.payload.query);
              var data = {
                speaker: "human",
                text: answer,
              };
              res.push(data);
            }
          }
        }
      });
      return res;
    } catch (e) {
      throw e;
    }
  }
}