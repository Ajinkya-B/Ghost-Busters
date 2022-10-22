import axios from "axios";
import TranscriptsDAO from "../dao/transcriptsDAO.js";
import app from "../server.js";
import {MongoClient} from "mongodb";
import controller from "../api/controllers/transcripts.controller.js"

export default class voiceflowAPI{
    static async getData() {

        // try {
            const res = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
            await controller.addClean(res);
            return res
            // return res.data
        // } catch (error) {
        //     console.log("Error!@")
        //     return null
        //
        // }
    };

    static async getRaw() {
        const res = await axios.get(`https://api-dm-test.voiceflow.fr/exportraw/${process.env.VOICEFLOW_API_KEY}?versionID=${process.env.VOICEFLOW_VERSION}`);
        await controller.addRaw(res);
        return res
    }
}

