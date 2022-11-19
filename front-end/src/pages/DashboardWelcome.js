// This is the application's landing page. It's also displayed when no project is selected.

import React from "react";
import {NavBtn, NavBtnLink} from "../components/Elements";
import Navbar from "../components/Navbar";


function DashboardWelcomeMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
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
                    <NavBtnLink to={'/ManageProjects'}>
                        Click me or "Manage Projects"!
                    </NavBtnLink>
                </NavBtn>
            </div>
        </div>
    )

}

export default function DashboardWelcomePage() {
    const style = {
        "background-image": `url(https://res.cloudinary.com/dx7wj0tty/image/upload/v1668827026/ghostbg_umg39u.jpg)`,
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
