import React, {Component, createContext} from "react";
import {NavBtn, NavBtnLink} from "./NavbarElements";
import axios from "axios";

import AnalyzeTranscripts from "../pages/AnalyzeTranscripts";

const UploadTranscriptsFromVoiceflow = () => {

    let transcriptData;

    const retrieveTranscripts = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/transcripts/getCredentials")
        axios.post('http://localhost:8000/api/v1/transcripts/trimmed', response.data)
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