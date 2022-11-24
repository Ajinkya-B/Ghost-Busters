// This is the Navbar displayed on each page of the application.

import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Elements';
import UploadTranscriptsModal from "./UploadTranscriptsModal";
import AnalyzeTranscripts from "./AnalyzeTranscripts";

const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/'>
          <h2>Home</h2>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to='/ManageProjects' activeStyle>
            Manage Projects
          </NavLink>
        </NavMenu>

        <UploadTranscriptsModal />

        <AnalyzeTranscripts />

      </Nav>
    </>
  );
};

export default Navbar;
