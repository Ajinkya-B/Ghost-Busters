import React from "react";
import {NavBtn, NavBtnLink} from "../components/NavbarElements";


export default function DashboardWelcomePage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return (
        <div className='container-fluid' style={style}>
            <h1 className='h1 title'>
                Welcome to your Ghostboard!
            </h1>
            <h4 className="subtitle">
                Please select a project.
            </h4>
            <NavBtn>
                <NavBtnLink to={'/ManageProject'}>
                    Click me or "Manage Projects"!
                </NavBtnLink>
            </NavBtn>
        </div>
    )

}
