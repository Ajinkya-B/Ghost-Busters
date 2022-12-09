// This component allows a user to click a button to upload transcripts to their project straight from Voiceflow.

import React, {useState} from "react";
import {NavBtnLink} from "./Elements";
import TranscriptDataService from "../services/TranscriptDataService";
import ClipLoader from "react-spinners/ClipLoader";

const UploadTranscriptsFromVoiceflow = () => {
    const [loading, setLoading] = useState(false);
    let transcriptData;

    const retrieveTranscripts = async () => {
        setLoading(true);
        await TranscriptDataService.uploadTranscripts()
            .then(response => {
                transcriptData = response;
            })
            .catch(e => {
                console.log(e)
            });
        setLoading(false);
    }

    return (
        <div>
            {loading?
                <ClipLoader
                    color="blue"
                    loading={loading}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            :
                <NavBtnLink onClick={() => retrieveTranscripts()}>
                    Upload
                </NavBtnLink>
            }
        </div>
    );

}

export default UploadTranscriptsFromVoiceflow;
