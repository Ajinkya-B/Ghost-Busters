import axios from "axios";

export default class voiceflowAPI{
    static async getData() {
        try {
            const res = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
            console.log(res.data)
        } catch (error) {
            console.log("Error!@")
        }
    };
}