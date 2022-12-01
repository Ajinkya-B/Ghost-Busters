// This is the Navbar displayed on each page of the application.

import React from 'react';
import { Nav, NavLink } from './Elements';
import UploadTranscriptsModal from "./UploadTranscriptsModal";


const Navbar = () => {
  return (
    <>
      <Nav>

        <NavLink to='/'>
          <h2>Home</h2>
        </NavLink>

        <NavLink to='/ManageProjects' activeStyle>
          Manage Projects
        </NavLink>

        <UploadTranscriptsModal />

      </Nav>
    </>
  );
};

export default Navbar;
