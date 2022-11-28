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
import Iconify from "../components/dashboard-components/app-components/iconify";
// other components
import SelectProject from "../components/SelectProject";
import Navbar from "../components/Navbar";
// etc.
import AnalyseProjectDataService from "../services/AnalyseProjectDataService";


export default function Dashboard() {
    // Analysing the project
    // ----------------------------------------------------------------------
    const {id} = useParams()

    const initialDataState = {
        avg_duration_text: 0,
        avg_duration_time: 0,
        total_conversations: 0,
        total_users_quit_per_day: {},
        reasons: {
            privacy: 0,
            no_solution: 0,
            human_interaction: 0,
            lengthy_convo: 0,
            chatbotRepetition: 0,
            other: 0
        },
        num_satisfied_users: 0,
        num_unsatisfied_users: 0,
        total_convos_per_day: {},
        reasons_per_day: {
            privacy: {},
            no_solution: {},
            human_interaction: {},
            lengthy_convo: {},
            chatbotRepetition: {},
            other: {}
        }
    };

    const [analysedData, setAnalysedData] = useState(initialDataState);

    const getAnalysedData = id => {
        AnalyseProjectDataService.analyseProject(id)
            .then(response => {
                setAnalysedData(response.data);
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
    let currentReason; // current title of graph
    let currentColor; // current colour of the graph's bars
    // current labels of graph
    let chartLabels = ['1','1','1'] //Object.keys(analysedData.total_convos_per_day);
    let chartData; // current data displayed by graph

    // The current counter (reason why the user left a chat) is selected when a Creator clicks on the card
    const [currentCounter, setCounter] = useState('Privacy Concerns')

    // The data for the graph is chosen based on the current counter
    switch(currentCounter) {
        case 'Unsatisfactory Solutions':
            chartData = [1,1,1] //Object.values(analysedData.reasons_per_day.no_solution)
            currentReason = 'Unsatisfactory Solutions'
            currentColor = '#FFE16A'
            break
        case 'Chatbot Repetitions':
            chartData = [1,1,1] //Object.values(analysedData.reasons_per_day.chatbotRepetition)
            currentReason ='Chatbot Repetitions'
            currentColor = '#BAF27F'
            break
        case 'Lengthy Chat Durations':
            chartData = [1,1,1] //Object.values(analysedData.reasons_per_day.lengthy_convo)
            currentReason = 'Lengthy Chat Durations'
            currentColor = '#74CAFF'
            break
        case 'Live Agent Requests':
            chartData = [1,1,1] //Object.values(analysedData.reasons_per_day.human_interaction)
            currentReason = 'Live Agent Requests'
            currentColor = '#c9aef3'
            break
        default:
            chartData = [1,1,1] //Object.values(analysedData.reasons_per_day.privacy)
            currentReason = 'Privacy Concerns'
            currentColor = '#FFA48D'
            break
    }

    // Displaying the Dashboard UI
    // ----------------------------------------------------------------------
    const theme = useTheme();

    return (
        <div>
            <Navbar />
            <br />

            <Container maxWidth="xl">
                <SelectProject />

                {/*COUNTERS*/}
                <Grid container spacing={4}>
                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Privacy Concerns')}>
                            <AppCounter title="Privacy Concerns" total={111} color="error" icon={'ant-design:key-outlined'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <counterButton onClick={() => setCounter('Unsatisfactory Solutions')}>
                            <AppCounter title="Unsatisfactory Solutions" total={111} color="warning" icon={'ant-design:frown-outline'} />
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
                            <AppCounter title="Live Agent Requests" total={111} color="secondary" icon={'ant-design:user-outlined'} />
                        </counterButton>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppGhostGraph
                            title={currentReason}
                            subheader="(+43%) than last year"
                            chartLabels={chartLabels}
                            chartData={[
                                {
                                    name: 'Users Leaving due to '.concat(currentReason),
                                    type: 'column',
                                    fill: 'solid',
                                    color: currentColor,
                                    data: chartData, // [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                    name: 'Total Users',
                                    type: 'area',
                                    fill: 'gradient',
                                    color: '#A9A9A9',
                                    data: chartData//Object.values(analysedData.total_convos_per_day),
                                },
                                {
                                    name: 'Total Users Leaving',
                                    type: 'line',
                                    fill: 'solid',
                                    color: '#2F4F4F',
                                    data: chartData//Object.values(analysedData.total_users_quit_per_day),
                                },
                            ]}
                        />
                    </Grid>

                    {/*Satisfaction Meter*/}
                    <Grid item xs={12} md={6} lg={4}>
                        <AppGhostMeter
                            title="Satisfaction Meter"
                            chartData={[
                                { label: 'Satisfied with chatbot', value: 1},//analysedData.num_satisfied_users },
                                { label: 'Unsatisfied', value: 1},//analysedData.num_unsatisfied_users },
                            ]}
                            chartColors={[
                                theme.palette.success.light,
                                theme.palette.error.light,
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

                    {/*Miscellaneous data*/}
                    <Grid item xs={12} md={6} lg={6}>
                        <AppIndexCard
                            title="Miscellaneous"
                            list={[
                                {
                                    name: 'Average Chat Duration (in seconds)',
                                    value: Math.floor(analysedData.avg_duration_time / 1000),
                                    icon: <Iconify icon={'eva:clock-outline'} color="#1877F2" width={32} />,
                                },
                                {
                                    name: 'Average Chat Length (by number of texts)',
                                    value: analysedData.avg_duration_text,
                                    icon: <Iconify icon={'eva:activity-outline'} color="#1877F2" width={32} />,
                                },
                                {
                                    name: 'Users Quitting due to Other Reasons',
                                    value: 1,//analysedData.reasons.other,
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
