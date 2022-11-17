import React from 'react';

import UploadTranscriptsFromVoiceflow from "./UploadTranscriptsFromVoiceflow";
import {NavBtn, NavBtnLink} from "./NavbarElements";

export default function AnalyzeTranscripts() {
  return (
    <>
      <NavBtn>
        <NavBtnLink onClick={() => console.log('hi')}>
          Analyze Transcripts
        </NavBtnLink>
      </NavBtn>
    </>
  );
};
