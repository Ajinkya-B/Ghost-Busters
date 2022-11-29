// This component allows a user to click a button to upload transcripts to their project straight from Voiceflow.

import React from "react";
import {NavBtnLink} from "./Elements";
import TranscriptDataService from "../services/TranscriptDataService";


const UploadTranscriptsFromVoiceflow = () => {

    let transcriptData;

    const retrieveTranscripts = async () => {
        TranscriptDataService.uploadTranscripts()
            .then(response => {
                transcriptData = response;
            })
            .catch(e => {
                console.log(e)
            });
    }

    return (
        <div>
            <NavBtnLink onClick={() => retrieveTranscripts()}>
                Upload
            </NavBtnLink>
        </div>
    );

}

export default UploadTranscriptsFromVoiceflow;
