import axios from "axios";

export default class voiceflowAPI{
    static async getData(apiKey, versionId) {
        try{
            return await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${apiKey}?versionID=${versionId}`)
        }catch(e){
            console.log("Error in the Voiceflow API call!")
        }
    };
}

