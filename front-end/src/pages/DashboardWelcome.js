import React from "react";
import {NavBtn, NavBtnLink} from "../components/NavbarElements";
import Navbar from "../components/Navbar";


function DashboardWelcomeMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "black"
    }
    return (
        <div>
            <Navbar />
            <br />
            <div style={style}>
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
        </div>
    )

}

export default function DashboardWelcomePage() {
    const style = {
        "background-image": `url("../images/ghostbg.jpeg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return <div style={style}>
        <DashboardWelcomeMessage />
    </div>
}
