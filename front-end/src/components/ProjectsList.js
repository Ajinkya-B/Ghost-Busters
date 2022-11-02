import React, {Component, useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { Link } from 'react-router-dom';

// const ProjectsList = props => {
//     const [projects, setProjects] = useState([]);
//
//     useEffect(() => {
//         retrieveProjects();
//     }, []);
//
//     const retrieveProjects = () => {
//         ProjectDataService.getAllProjects()
//             .then(response => {
//                 console.log(response.data);
//                 setProjects(response.data.projects);
//             })
//             .catch(e => {
//                 console.log(e)
//             });
//     };
// }

const AdsContainer = ({children}) => {
    const [projects, setProject] = useState();

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/projects/getAllProjects").then(response => {
            setProject(response.json())
        })
    }, [])
}