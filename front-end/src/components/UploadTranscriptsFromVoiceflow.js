// This component allows a user to click a button to upload transcripts to their project straight from Voiceflow.

import React from "react";
import {NavBtn, NavBtnLink} from "./Elements";
import axios from "axios";
import TranscriptDataService from "../services/TranscriptDataService";


const UploadTranscriptsFromVoiceflow = () => {

    let transcriptData;

    const retrieveTranscripts = async () => {
        // const response = TranscriptDataService.getCredentials()
        // response.data
        TranscriptDataService.uploadTranscripts()
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
