export const PRIVACY_KEYWORDS = ["provide", "email", "phone", "mobile number",
    "location", "credit card", "driver's licence no.", "driver's licence number"];

export const NO_SOLUTION_KEYWORDS = ["sorry", "Sorry", "can't help you", "no solution",
    "can't provide solution", "connect to live agent", "live agent", "customer service rep",
    "agent"];

export const HUMAN_INTERAC_KEYWORDS = ["talk to agent", "agent", "human"];



export function isPrivacyConcern(dialouges){

    let keywords = PRIVACY_KEYWORDS;
    let l = dialouges.length;

    for (let t in dialouges){
    if( keywords.some(keyword => text.includes(keyword) )) {
            console.log("Found")
             }
    }






}
