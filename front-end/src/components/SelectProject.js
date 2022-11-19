// This component is the Select Project Use Case. It is visible on the Manage Project page.
// When a user selects a project, the dashboard screen for the selected project is displayed.

import React, { useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { useParams } from 'react-router-dom';
import axios from "axios";


const SelectProject = props => {
    const { id } = useParams()

    const initialProjectState = {
        id : "",
        project_name: "",
        project_id: null,
        api_key:null,
        transcripts: []
    };

    const [project, setProject] = useState(initialProjectState);

    const getProject = id => {
        ProjectDataService.get(id)
            .then(response => {
                setProject(response.data);
                let values = [response.data.api_key, response.data.project_id]
                axios.post("https://ghost-busters-backend-f6c6b7uoga-uc.a.run.app/api/v1/transcripts/store", values).then(r => {})
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProject(id)
    }, [id]);

    return (
        <div>
            {project.project_id ?(
                <div>
                    <h4>Analytics for {project.project_name}</h4>
                    <p>
                        <strong>API_KEY: </strong>{project.api_key}<br/>
                        <strong>VERSION_ID: </strong>{project.project_id}
                    </p>
                    <h4> Analysed Transcripts </h4>
                    <div className="row">
                        {project.transcripts.length > 0 ? (
                            project.transcripts.map((transcript, index) => {
                                return (
                                    <div className="col-lg-4 pb-1" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    {transcript._id}<br/>
                                                    <strong>Duration: </strong>{"duration"}
                                                    <br/>
                                                    <strong>Bot's last Text: </strong>{"bot"}
                                                    <br/>
                                                    <strong>Human's last Text: </strong>{"human"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-sm-4">
                                <p>No transcripts uploaded.</p>
                            </div>
                        )}

                    </div>

                </div>
            ) : (
                <div>
                    <br />
                    <p>No project selected.</p>
                </div>
                )
            }
        </div>
    );
};

export default SelectProject;
