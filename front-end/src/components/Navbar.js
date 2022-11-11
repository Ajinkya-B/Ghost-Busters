import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import UploadTranscriptsModal from "./UploadTranscriptsModal";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Dashboard'>
          <h2>Dashboard</h2>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to='/ManageProject' activeStyle>
            Manage Project
          </NavLink>
        </NavMenu>
        
        {/*<NavBtn>*/}
        {/*  <NavBtnLink to='/UploadTranscripts'>Upload Transcripts</NavBtnLink>*/}
        {/*</NavBtn>*/}

        <UploadTranscriptsModal />

        <NavBtn>
          <NavBtnLink to='/AnalyzeTranscripts'>Analyze Transcripts</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
