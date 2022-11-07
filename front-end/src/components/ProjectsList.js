import React, {Component, useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { NavBtn, NavBtnLinkSelect, NavBtnLinkRemove } from "./NavbarElements";
import Table from "./Table"
import Project from "./Project";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function ProjectsList() {
    const [projects, setProjects] = useState([]);

    // Getting the Project objects
    const retrieveProjects = async () => {
        const response = await ProjectDataService.getAllProjects() // axios.get('http://localhost:8000/api/v1/projects')
        const res = await response.data
        return res
    }

    const getProjects = async () => {
        const projectsFromServer = await retrieveProjects()
        setProjects(projectsFromServer)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div>
            <table>
                <Table projectData={projects} />
            </table>
        </div>
    )
}

export default ProjectsList;
