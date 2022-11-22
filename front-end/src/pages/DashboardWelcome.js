// This is the application's landing page. It's also displayed when no project is selected.

import React from "react";
import Navbar from "../components/Navbar";
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button } from '@mui/material';
// images
import ghost_animation from "../images/ghost-animation.gif"


function DashboardWelcomeMessage() {
    const style = {
        padding: '18%',
        color: 'black',
        textAlign: 'right',
    }
    return (
        <div style={style}>
            <h1 className='h1 title fw-bolder'>
                Welcome to your Ghostboard!
            </h1>

            <br />

            <h4 className="subtitle">
                Please select a project.
            </h4>

            <br />

            <Button to="/ManageProjects" size="large" variant="outlined" component={RouterLink}>
                Click me or "Manage Projects"!
            </Button>
        </div>
    )

}

export default function DashboardWelcomePage() {
    const style = {
        "background-image": `url(${ghost_animation})`,
        "background-repeat": "no-repeat",
        "background-position": "left",
        "background-color": "#f7f7f7",
        height: "100%",
        width: "100%"
    }

    return <div style={style}>
        <Navbar />
        <DashboardWelcomeMessage />
    </div>
}
