export const PRIVACY_KEYWORDS = ["provide", "email", "phone", "mobile number",
    "location", "credit card", "driver's licence no.", "driver's licence number", "phone number",
"sin", "social security number", "address"];

export const NO_SOLUTION_KEYWORDS = ["sorry", "can't help you", "no solution", "don't understand",
    "can't provide solution", "connect to live agent", "live agent", "customer service rep",
    "agent", "didn't catch that", "could you repeat", "customer service", "representative", "repeat"];

export const HUMAN_INTERAC_KEYWORDS = ["talk to agent", "agent", "human",
    "customer service rep", "live agent", "customer service", "representative"];


/**
 * Returns whether the user left the chat due to privacy concerns.
 * @param dialogues
 * @returns {boolean}
 */
export function isPrivacyConcern(dialogues) {

    let keywords = PRIVACY_KEYWORDS;
    let l = dialogues.length;

    for (let i = l - 1; i >= l / 2; i--) {

        if (dialogues[i].speaker == "bot") {
            let text = dialogues[i].text.toLowerCase();
            if (keywords.some(keyword => text.includes(keyword))) {
                // console.log("Found")
                if (i == l - 1) {
                    return true;
                }
                let other_keywords = ["no", "don't want to", "not comfortable", "personal information",
                    "agent"]
                let text2 = dialogues[i + 1].text.toLowerCase();
                if (other_keywords.some(keyword => text.includes(keyword))) {
                    // console.log("Found")
                    return true;

                }
            }
        }
        return false;
    }
}

/**
 * Returns whether the customer left the chat because the bot couldn't
 * provide a solution to their question/problem.
 * @param dialogues
 * @returns {boolean}
 */
export function isNoSolution(dialogues) {
    let keywords = NO_SOLUTION_KEYWORDS;
    let l = dialogues.length;

    for (let i = l - 1; i >= l / 2; i--) {
        if (dialogues[i].speaker == "bot") {
            let text = dialogues[i].text.toLowerCase();
            if (keywords.some(keyword => text.includes(keyword))) {
                // console.log("Found");
                return true;
            }
        }
    }
    return false;
}

/**
 * Returns whether the user wants human interaction rather than speaking to  bot.
 * @param dialogues
 * @returns {boolean}
 */
export function isHumanInteraction(dialogues){

    let keywords = HUMAN_INTERAC_KEYWORDS;
    let l = dialogues.length;

    for (let i = l - 1; i >= 0; i--) {

        if (dialogues[i].speaker == "human") {
            let text = dialogues[i].text.toLowerCase();
            if (keywords.some(keyword => text.includes(keyword))) {
                // console.log("Found");
                return true;
            }
        }
    }
    return false;
}




