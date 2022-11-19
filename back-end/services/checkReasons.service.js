export const PRIVACY_KEYWORDS = ["provide", "email", "phone", "mobile number",
    "location", "credit card", "driver's licence no.", "driver's licence number"];

export const NO_SOLUTION_KEYWORDS = ["sorry", "can't help you", "no solution", "don't understand",
    "can't provide solution", "connect to live agent", "live agent", "customer service rep",
    "agent", "didn't catch that", "could you repeat"];

export const HUMAN_INTERAC_KEYWORDS = ["talk to agent", "agent", "human"];


/**
 * Returns whether the user left the chat due to privacy concerns.
 * @param dialouges
 * @returns {boolean}
 */
export function isPrivacyConcern(dialouges){

    let keywords = PRIVACY_KEYWORDS;
    let l = dialouges.length;

    for (let i = l - 1; i < l/2 ; i --) {

        if (dialouges[i].speaker == "bot") {
            text = dialouges[i].text.toLowerCase();
            if (keywords.some(keyword => text.includes(keyword))) {
                console.log("Found")
                if (i == l - 1) {
                    return true;
                }
                let other_keywords = ["no", "don't want to", "not comfortable", "personal information",
                    "agent"]
                let text2 = dialouges[i + 1].text.toLowerCase();
                if (other_keywords.some(keyword => text.includes(keyword))) {
                    console.log("Found")
                    return true;

                }
            }
        }
        return false;
    }
}
