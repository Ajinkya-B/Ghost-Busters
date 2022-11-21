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
        total_users_quit: null,
        reasons: {
            privacy: null,
            no_solution: null,
            human_interaction: null,
            other: null
        }
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
        <div>


            <h5>Analysed Data</h5>
            <p>
                <strong>Average Duration: </strong>{analysedData.avg_duration_time}<br/>
                <strong>Average Length (texts): </strong>{analysedData.avg_duration_text}<br/>
                <strong>Total users force quit: </strong>{analysedData.total_users_quit}<br/>
                <strong>Reasons: </strong><br/>
                <li>Privacy Concern: {analysedData.reasons.privacy}</li><br/>
                <li>No solution: {analysedData.reasons.no_solution}</li><br/>
                <li>Human Interaction: {analysedData.reasons.human_interaction}</li><br/>
                <li>Others: {analysedData.reasons.other} </li><br/>


            </p>

        </div>

    );
};

export default AnalyseProject;