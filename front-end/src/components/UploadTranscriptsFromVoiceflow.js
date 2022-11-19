// This component allows a user to click a button to upload transcripts to their project straight from Voiceflow.

import React from "react";
import {NavBtn, NavBtnLink} from "./Elements";
import axios from "axios";


const UploadTranscriptsFromVoiceflow = () => {

    let transcriptData;

    const retrieveTranscripts = async () => {
        const response = await axios.get("https://ghost-busters-backend-f6c6b7uoga-uc.a.run.app/api/v1/transcripts/getCredentials")
        axios.post('https://ghost-busters-backend-f6c6b7uoga-uc.a.run.app/api/v1/transcripts/trimmed', response.data)
            .then(response => {
                // console.log(response);
                transcriptData = response;
            })
            .catch(e => {
                console.log(e)
            });
    }

    return (
        <div>
            <NavBtn centered>
                <NavBtnLink onClick={() => retrieveTranscripts()}>
                    Upload
                </NavBtnLink>
            </NavBtn>
            {transcriptData}
        </div>
    );

}

export default UploadTranscriptsFromVoiceflow;
