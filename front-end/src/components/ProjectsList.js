// import React, {Component, useState, useEffect } from "react";
// import ProjectDataService from '../services/ProjectDataService';
// import { Link } from 'react-router-dom';
//
// const ProjectsList = props => {
//     const [projects, setProjects] = useState([]);
//
//     useEffect(() => {
//         retrieveProjects();
//     }, []);
//
//     const retrieveProjects = () => {
//         ProjectDataService.getAll()
//             .then(response => {
//                 console.log(response.data);
//                 setProjects(response.data.projects);
//             })
//             .catch(e => {
//                 console.log(e)
//             });
//     };
// }