// The UI elements of the application (e.g., buttons and the styling of the Navbar).

import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


/* Navbar styling
   ========================================================================== */
// The background of the navbar
export const Nav = styled.nav`
  background: #eee;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* No space: */
  /* justify-content: flex-start; */
`;

// Text that links to a different page
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #3e81e2;
  }
`;

// Button with a blue background
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Use this in between NavBtn for buttons that link to a different page
// E.g.,
// <NavBtn>
//     <NavBtnLink>
//         Text inside your button
//     </NavBtnLink>
// </NavBtn>
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #3e81e2;
  padding: 10px 18px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

// Inactive button
export const BtnInactive = styled(Link)`
  border-radius: 4px;
  background: #bbb;
  padding: 10px 18px;
  color: #fff;
  outline: none;
  border: none;
  cursor: not-allowed;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  }
`;


/* Miscellaneous
   ========================================================================== */
// Button for selecting a project
export const BtnSelect = styled(Link)`
  border-radius: 100000px;
  background: #bbb;
  padding: 2px 10px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  // transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    // transition: all 0.2s ease-in-out;
    background: #8FEA89;
    color: #138A0C;
  }
`;

// Button for removing a project
export const BtnRemove = styled(Link)`
  border-radius: 100000px;
  background: #bbb;
  padding: 2px 10px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  // transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 50px;

  &:hover {
    // transition: all 0.2s ease-in-out;
    background: #DE4747;
    color: #7F0909;
  }
`;
