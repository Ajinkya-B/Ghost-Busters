import React, {useState, useEffect} from "react";
import ProjectDataService from "../services/ProjectDataService";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import axios from "axios";

import TranscriptDataService from "../services/TranscriptDataService";




const Project = props => {
    const {id} = useParams()

    const initialProjectState = {
        id: "",
        project_name: "",
        project_id: null,
        api_key: null,
        transcripts: []
        // analysedData: {
        //
        //     "avg_duration_text": null,
        //     "avg_duration_time": null,
        //     "total_users_quit": null,
        //     "reasons": {
        //         "privacy": null,
        //         "no_solution": null,
        //         "human_interaction": null,
        //         "other": null
        //     }
        // }
    };

    // const initialDataState = {
    //
    //     "avg_duration_text": null,
    //     "avg_duration_time": ,
    //     "total_users_quit": null,
    //     "reasons": {
    //         "privacy": null,
    //         "no_solution": null,
    //         "human_interaction": null,
    //         "other": null
    //     }
    // };

    const [project, setProject] = useState(initialProjectState);
    // const [analysedData, setAnalysedData] = useState(initialDataState);

    const getProject = id => {

        ProjectDataService.get(id)
            .then(response => {
                setProject(response.data);
                let values = [response.data.api_key, response.data.project_id]

                TranscriptDataService.storeCredentials(values).then(r => {})

            })
            .catch(e => {
                console.log(e);
            });


    };

    // const getAnalysedData = id => {
    //
    //     AnalyseProjectDataService.analyseProject(id)
    //         .then(response => {
    //             setAnalysedData({analysedData: response.data});
    //
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    //
    //
    // };

    useEffect(() => {
        getProject(id)
    }, [id]);


    return (
        <div>
            {project.project_id ? (
                <div>
                    <h5>{project.project_name}</h5>
                    <p>
                        <strong>API_KEY: </strong>{project.api_key}<br/>
                        <strong>PROJECT_ID: </strong>{project.project_id}<br/>

                    </p>
                    {/*<Link to={"/restaurants/" + props.match.params.id + "/review"} className="btn btn-primary">*/}
                    {/*    Add Review*/}
                    {/*</Link>*/}



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