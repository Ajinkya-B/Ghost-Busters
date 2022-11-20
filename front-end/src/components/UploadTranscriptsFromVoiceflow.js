import React, {Component, createContext} from "react";
import {NavBtn, NavBtnLink} from "./NavbarElements";
import axios from "axios";
import TranscriptDataService from "../services/TranscriptDataService";

import AnalyzeTranscripts from "../pages/AnalyzeTranscripts";

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
            <NavBtn>
                <NavBtnLink onClick={() => retrieveTranscripts()}>
                    Upload
                </NavBtnLink>
            </NavBtn>
            {transcriptData}
        </div>
    );

}

export default UploadTranscriptsFromVoiceflow;
