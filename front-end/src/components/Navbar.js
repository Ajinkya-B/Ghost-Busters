import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import UploadTranscriptsModal from "./UploadTranscriptsModal";
import AnalyzeTranscripts from "./AnalyzeTranscripts";

const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/Dashboard/:id'>
          <h2>Dashboard</h2>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to='/ManageProject' activeStyle>
            Manage Project
          </NavLink>
        </NavMenu>

        <UploadTranscriptsModal />

        <AnalyzeTranscripts />

      </Nav>
    </>
  );
};

export default Navbar;
