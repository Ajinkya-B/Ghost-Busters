import React, { useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";



const Project = props => {
    const { id } = useParams()

    const initialProjectState = {
        id : id,
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
                axios.post("http://localhost:8000/api/v1/transcripts/store", values).then(r => {})
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProject(id);
    }, [id]);


    return (
        <div>
            {project ?(
                <div>
                    <h5>{project.project_name}</h5>
                    <p>
                        <strong>API_KEY: </strong>{project.api_key}<br/>
                        <strong>PROJECT_ID: </strong>{project.project_id}
                    </p>
                    {/*<Link to={"/restaurants/" + props.match.params.id + "/review"} className="btn btn-primary">*/}
                    {/*    Add Review*/}
                    {/*</Link>*/}
                    <h4> Analysed Transcripts </h4>
                    <div className="row">
                        {project.transcripts.length > 0 ? (
                            project.transcripts.map((transcript, index) => {
                                return (
                                    <div className="col-lg-4 pb-1" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    {transcript.id}<br/>
                                                    <strong>Duration: </strong>{"duration"}<br/>
                                                    <strong>Bot's last Text: </strong>{"bot"}<br/>
                                                    <strong>Human's last Text: </strong>{"human"}
                                                </p>
                                                {/*{props.user && props.user.id === review.user_id &&*/}
                                                {/*    <div className="row">*/}
                                                {/*        <a onClick={() => deleteReview(review._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>*/}
                                                {/*        <Link to={{*/}
                                                {/*            pathname: "/restaurants/" + props.match.params.id + "/review",*/}
                                                {/*            state: {*/}
                                                {/*                currentReview: review*/}
                                                {/*            }*/}
                                                {/*        }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>*/}
                                                {/*    </div>*/}
                                                {/*}*/}
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

export default Project;