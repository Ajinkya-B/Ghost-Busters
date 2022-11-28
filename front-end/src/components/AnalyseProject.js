import React, {useState, useEffect} from "react";
import ProjectDataService from "../services/ProjectDataService";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import axios from "axios";
import AnalyseProjectDataService from "../services/AnalyseProjectDataService"


const AnalyseProject = props => {
    const {id} = useParams()


    const initialDataState = {


        avg_duration_text: null,
        avg_duration_time: null,
        total_conversations: {},
        total_users_quit: null,
        reasons: {
            privacy: null,
            no_solution: null,
            human_interaction: null,
            lengthy_convo: null,
            chatbot_repetition: null,
            other: null
        },
        satisfaction: null,
    };

    const [analysedData, setAnalysedData] = useState(initialDataState);
    // const [analysedData, setAnalysedData] = useState(initialDataState);

    const getAnalysedData = id => {

        AnalyseProjectDataService.analyseProject(id)
            .then(response => {
                setAnalysedData(response.data);
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
        getAnalysedData(id)
    }, [id]);


    return (
        <div> {analysedData.avg_duration_time ? (
            <div>


            <h5>Analysed Data</h5>
            <p>
                <strong>Average Duration (in milliseconds): </strong>{analysedData.avg_duration_time}<br/>
                <strong>Average Length (texts): </strong>{analysedData.avg_duration_text}<br/>

                <strong>Total conversations: </strong>
                <ul>
                    {Object.entries(analysedData.total_conversations)
                .map( ([key, value]) => <li> {key} : {value}
                </li>) }
                </ul>

                <strong>Totalusers force quit: </strong>
                <ul>
                    {Object.entries(analysedData.total_users_quit)
                        .map( ([key, value]) => <li> {key} : {value}
                        </li>) }
                </ul>

                {/*<strong>Total users force quit: </strong>{analysedData.total_users_quit}<br/>*/}
                <strong>Reasons: </strong><br/>
                <li>Privacy Concern: {analysedData.reasons.privacy}</li><br/>
                <li>No solution: {analysedData.reasons.no_solution}</li><br/>
                <li>Human Interaction: {analysedData.reasons.human_interaction}</li><br/>
                <li>Lengthy Conversations: {analysedData.reasons.lengthy_convo}</li><br/>
                <li>Chatbot Repetition: {analysedData.reasons.chatbot_repetition}</li><br/>
                <li>Others: {analysedData.reasons.other} </li><br/>
                <li>Satisfaction: {analysedData.satisfaction}</li><br/>


            </p>
            </div>
            ) : (
            <div>
                <br/>
                <p></p>
            </div>
        )}

        </div>

    );
};

export default AnalyseProject;