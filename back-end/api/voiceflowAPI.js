import axios from "axios";

export default class voiceflowAPI{
    static async getData() {
        try {
            const res = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
            res.data.forEach(function(todo) {
                console.log(todo);
                console.log(todo[0].projectID);
            });
            return res.data
        } catch (error) {
            console.log("Error!@")
            return null
        }
    };
}