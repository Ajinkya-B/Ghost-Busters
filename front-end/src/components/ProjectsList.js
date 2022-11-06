import React, {Component, useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { NavBtn, NavBtnLink2, NavBtnLink3 } from "./NavbarElements";
import Project from "./Project";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TO DO: Provide each project name with a "select project" button

// The header of the table that lists the project names
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Action</th>
            {/*<th>Remove</th>*/}
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
                <td>

                    <NavBtn>
                        {/*<Router>*/}
                        {/*<Route exact path= '/projects/:id' element = {<Project project_id = {row.project_id}/>} />*/}
                        {/*</Router>*/}
                        <NavBtnLink2 to={"/projects/" + row._id}>
                            Select
                        </NavBtnLink2>
                        <NavBtnLink3>
                            Remove
                        </NavBtnLink3>
                    </NavBtn>

                </td>
                {/*<td>*/}
                {/*    <NavBtn>*/}
                {/*        <NavBtnLink3>*/}
                {/*            Remove*/}
                {/*        </NavBtnLink3>*/}
                {/*    </NavBtn>*/}
                {/*</td>*/}
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

const ProjectsList = props => {
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

    // const deleteProject = (projectName, index) => {
    //     ProjectDataService.deleteProject(projectName)
    //         .then(res => {
    //             setProjects((prevState) => {
    //                 prevState.projects.splice(index, 1)
    //                 return({
    //                     ...prevState
    //                 })
    //             })
    //         })
    //         .catch (e => {
    //             console.log(e);
    //         });
    // };

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
