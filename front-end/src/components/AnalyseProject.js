import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import AnalyseProjectDataService from "../services/AnalyseProjectDataService"
import Dashboard from "../pages/Dashboard";

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

    const getAnalysedData = id => {
        AnalyseProjectDataService.analyseProject(id)
            .then(response => {
                setAnalysedData(response.data);  // or setAnalysedData({analysedData: response.data})
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getAnalysedData(id)
    }, []);

    return (
        <div>
            {analysedData.avg_duration_time ?
            (<div>
                <h5>Analysed Data</h5>
                <p>
                    <strong>Average Duration (in milliseconds): </strong>{analysedData.avg_duration_time}<br/>
                    <strong>Average Length (texts): </strong>{analysedData.avg_duration_text}<br/>
                    <strong>Total users force quit: </strong>{analysedData.total_users_quit}<br/>
                    <strong>Reasons: </strong><br/>
                    <li>Privacy Concern: {analysedData.reasons.privacy}</li><br/>
                    <li>No solution: {analysedData.reasons.no_solution}</li><br/>
                    <li>Human Interaction: {analysedData.reasons.human_interaction}</li><br/>
                    <li>Others: {analysedData.reasons.other} </li><br/>
                </p>
            </div>) :
            (<div>
                <br/>
                <p></p>
            </div>)
            }
        </div>

    );
};

export default AnalyseProject;
