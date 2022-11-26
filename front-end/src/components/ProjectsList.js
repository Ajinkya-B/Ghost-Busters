// This component is the table of projects shown on the Manage Projects page.
// It also allows the Voiceflow Creator to delete and select projects.

import React, { useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { NavBtn, BtnSelect, BtnRemove } from "./Elements";
import {Table} from "react-bootstrap";


// The header of the table that lists the project names
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Action</th>
        </tr>
        </thead>
    );
}

export default function ProjectsList() {
    const [projects, setProjects] = useState([]);

    // Getting the Project objects
    const retrieveProjects = async () => {
        const response = await ProjectDataService.getAllProjects()
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

    // Method to delete a project from the database
    const deleteProject = async (projectName) => {
        console.log(projectName)
        await ProjectDataService.deleteProject(projectName)
        const res = await ProjectDataService.getAllProjects()
        setProjects(res.data)
    }

    // The body of the table
    const TableBody = () => {
        const rows = projects.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.project_name}</td>
                    <td>
                        <NavBtn>
                            <BtnSelect to={'/Dashboard/' + row._id} >
                                Select
                            </BtnSelect>
                            <BtnRemove onClick={() => deleteProject(row.project_name)}>
                                Remove
                            </BtnRemove>
                        </NavBtn>
                    </td>
                </tr>
            );
        });
        return <tbody>{rows}</tbody>;
    }

    return (
        <div className='container-fluid'>
            <Table striped bordered hover>
                <TableHeader />
                <TableBody />
            </Table>
        </div>
    )
}
