import React, {Component, useState, useEffect } from "react";
import axios from "axios";

// TO DO: Provide each project name with a "select project" button

// The header of the table that lists the project names
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Select</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
}

// The body of the table
const TableBody = props => {
    const rows = props.projectData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.project_name}</td>
                <td><button>o</button></td>
                <td><button>x</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

const ProjectsList = props => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const projectsFromServer = await retrieveProjects()
            setProjects(projectsFromServer)
        }
        getProjects()
    }, [])

    // Getting the Project objects
    const retrieveProjects = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/projects/getAllProjects')
        const res = await response.data
        return res
    }

    return (
        <div>
            <table>
                <TableHeader />
                <TableBody projectData={projects} />
            </table>
        </div>
    )
}

export default ProjectsList;
