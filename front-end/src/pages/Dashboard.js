// The Dashboard page that is displayed when a Voiceflow Creator selects a project

import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container} from '@mui/material';
// dashboard UI components
import {
    AppGhostMeter,
    AppGhostGraph,
    AppIndexCard,
    AppCounter,
    AppBarGraph,
} from '../components/dashboard-components/app';
// other components
import SelectProject from "../components/SelectProject";
import AnalyseProject from "../components/AnalyseProject";
import Navbar from "../components/Navbar";
import Iconify from "../components/dashboard-components/app-components/iconify";
// etc.
import AnalyseProjectDataService from "../services/AnalyseProjectDataService"


export default function Dashboard() {
    // Analysing the project
    // ----------------------------------------------------------------------
    const {id} = useParams()

    const initialDataState = {
        avg_duration_text: 0,
        avg_duration_time: 0,
        total_users_quit: 0,
        reasons: {
            privacy: 0,
            no_solution: 0,
            human_interaction: 0,
            other: 0
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

    // Setting data for the graph according the current selected project
    // ----------------------------------------------------------------------
    let chartLabels =
        [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003'
        ]
    let chartData;
    let currentReason;

    // The current counter (reason why the user left a chat) is selected when a Creator clicks on the card
    const [currentCounter, setCounter] = useState('Privacy Concerns')

    // The data for the graph is chosen based on the current counter
    switch(currentCounter) {
        case 'Unsatisfactory Solutions':
            chartData = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
            currentReason = 'Unsatisfactory Solutions'
            break
        case 'Chatbot Repetitions':
            chartData = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            currentReason ='Chatbot Repetitions'
            break
        case 'Lengthy Chat Durations':
            chartData = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
            currentReason = 'Lengthy Chat Durations'
            break
        case 'Live Agent Requests':
            chartData = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            currentReason = 'Live Agent Requests'
            break
        default:
            chartData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            currentReason = 'Privacy Concerns'
            break
    }

    // Returning the Dashboard UI
    // ----------------------------------------------------------------------
    const theme = useTheme();

    return (
        <div>
            <Navbar />
            <br />

            <Container maxWidth="xl">
                <SelectProject />
                {/*<AnalyseProject />*/}

                {/*<Typography variant="h5" sx={{ mb: 5 }}>*/}
                {/*    Analytics for {projectName}*/}
                {/*</Typography>*/}

                {/*COUNTERS*/}
                <Grid container spacing={4}>
                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Privacy Concerns')}>
                            <AppCounter title="Privacy Concerns" total={analysedData.reasons.privacy} color="error" icon={'ant-design:key-outlined'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Unsatisfactory Solutions')}>
                            <AppCounter title="Unsatisfactory Solutions" total={analysedData.reasons.no_solution} color="warning" icon={'ant-design:frown-outline'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Chatbot Repetitions')}>
                            <AppCounter title="Chatbot Repetitions" total={111} color="success" icon={'ant-design:comment-outlined'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Lengthy Chat Durations')}>
                            <AppCounter title="Lengthy Chat Durations" total={111} color="info" icon={'ant-design:field-time-outlined'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Live Agent Requests')}>
                            <AppCounter title="Live Agent Requests" total={analysedData.reasons.human_interaction} color="secondary" icon={'ant-design:user-outlined'} />
                        </counterButton>
                    </Grid>

                    {/*TODO: Change the graph / make it so that a specific graph appears when you click on a counter*/}

                    <Grid item xs={12} md={6} lg={8}>
                        <AppGhostGraph
                            title={currentReason}
                            subheader="(+43%) than last year"
                            chartLabels={chartLabels}
                            chartData={[
                                {
                                    name: 'Users Leaving',
                                    type: 'column',
                                    fill: 'solid',
                                    data: chartData, // [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                    name: 'Team B',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                                },
                                {
                                    name: 'Team C',
                                    type: 'line',
                                    fill: 'solid',
                                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                                },
                            ]}
                        />
                    </Grid>

                    {/*GhostMeter*/}
                    <Grid item xs={12} md={6} lg={4}>
                        <AppGhostMeter
                            title="Satisfaction Meter"
                            chartData={[
                                // { label: 'Privacy Concerns', value: 4344 },
                                // { label: 'Unsatisfactory Solutions', value: 5435 },
                                // { label: 'Chatbot Repetitions', value: 1443 },
                                // { label: 'Lengthy Chat Durations', value: 4443 },
                                // { label: 'Live Agent Requests', value: 4443 },
                                { label: 'Satisfied with chatbot', value: 443 },
                                { label: 'Unsatisfied', value: 12 },
                            ]}
                            chartColors={[
                                // theme.palette.warning.light,
                                theme.palette.success.light,
                                theme.palette.error.light,
                                // theme.palette.info.light,
                                // theme.palette.secondary.light,
                            ]}
                        />
                    </Grid>

                    {/*<Grid item xs={12} md={6} lg={8}>*/}
                    {/*    <AppBarGraph*/}
                    {/*        title="Conversion Rates"*/}
                    {/*        subheader="(+43%) than last year"*/}
                    {/*        chartData={[*/}
                    {/*            { label: 'Italy', value: 400 },*/}
                    {/*            { label: 'Japan', value: 430 },*/}
                    {/*            { label: 'China', value: 448 },*/}
                    {/*            { label: 'Canada', value: 470 },*/}
                    {/*            { label: 'France', value: 540 },*/}
                    {/*            { label: 'Germany', value: 580 },*/}
                    {/*            { label: 'South Korea', value: 690 },*/}
                    {/*            { label: 'Netherlands', value: 1100 },*/}
                    {/*            { label: 'United States', value: 1200 },*/}
                    {/*            { label: 'United Kingdom', value: 1380 },*/}
                    {/*        ]}*/}
                    {/*    />*/}
                    {/*</Grid>*/}

                    <Grid item xs={12} md={6} lg={6}>
                        <AppIndexCard
                            title="Miscellaneous"
                            list={[
                                {
                                    name: 'Average Chat Duration (in milliseconds)',
                                    value: analysedData.avg_duration_time,
                                    icon: <Iconify icon={'eva:clock-outline'} color="#1877F2" width={32} />,
                                },
                                {
                                    name: 'Average Chat Length (by number of texts)',
                                    value: analysedData.avg_duration_text,
                                    icon: <Iconify icon={'eva:activity-outline'} color="#1877F2" width={32} />,
                                },
                                {
                                    name: 'Total Number of Chats Force-quit',
                                    value: analysedData.total_users_quit,
                                    icon: <Iconify icon={'eva:message-square-outline'} color="#1877F2" width={32} />,
                                },

                            ]}
                        />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}
