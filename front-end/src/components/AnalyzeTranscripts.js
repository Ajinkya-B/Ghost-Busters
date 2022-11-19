// This component is the "Analyze Transcripts" button seen on the Navbar.
// TO BE UPDATED.

import React from 'react';
import {NavBtn, NavBtnLink} from "./Elements";


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
