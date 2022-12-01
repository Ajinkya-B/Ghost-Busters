// This is the Navbar displayed on each page of the application.

import React from 'react';
import { Nav, NavLink } from './Elements';
import UploadTranscriptsModal from "./UploadTranscriptsModal";
import AnalyzeTranscripts from "./AnalyzeTranscripts";

const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/' onClick={()=>{window.reload()}}>
          <h2>Home</h2>
        </NavLink>

        <NavLink to='/ManageProjects' activeStyle onClick={()=>{window.reload()}}>
          Manage Projects
        </NavLink>

        <UploadTranscriptsModal />

        <AnalyzeTranscripts />

      </Nav>
    </>
  );
};

export default Navbar;
