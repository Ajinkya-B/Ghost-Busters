// This component displays the selected project name on the dashboard.

import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ProjectDataService from "../services/ProjectDataService";
import TranscriptDataService from "../services/TranscriptDataService";


const Project = () => {
    const {id} = useParams()

    const initialProjectState = {
        id: "",
        project_name: "",
        project_id: null,
        api_key: null,
        transcripts: []
    };

    const [project, setProject] = useState(initialProjectState);

    const getProject = id => {
        ProjectDataService.get(id)
            .then(response => {
                setProject(response.data);
                let values = [response.data.api_key, response.data.project_id]
                TranscriptDataService.storeCredentials(values).then()
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
            {project.project_id ? (
                <div>
                    <h4>{project.project_name}</h4>
                    <p>
                        {/*<strong>API_KEY: </strong>{project.api_key}<br/>*/}
                        {/*<strong>PROJECT_ID: </strong>{project.project_id}<br/>*/}
                    </p>
                </div>
            ) : (
                <div>
                    <br/>
                    <p>No project selected.</p>
                </div>
            )
            }
        </div>
    );
};

export default Project;
