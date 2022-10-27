import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

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
            Select Project
          </NavLink>
        </NavMenu>
        
        <NavBtn>
          <NavBtnLink to='/UploadTranscripts'>Upload Transcripts</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/AnalyzeTranscripts'>Analyze Transcripts</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
