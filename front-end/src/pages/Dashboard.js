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
} from '../components/dashboard-components/app';
import Iconify from "../components/dashboard-components/app-components/iconify";
// other components
import SelectProject from "../components/SelectProject";
import Navbar from "../components/Navbar";
// etc.
import AnalyseProjectDataService from "../services/AnalyseProjectDataService";
import ClipLoader from "react-spinners/ClipLoader";


export default function Dashboard() {
    // Analysing the project
    // ----------------------------------------------------------------------
    const {id} = useParams()

    const initialDataState = {
        avg_duration_text: 0,
        avg_duration_time: 0,
        total_users_quit_per_day: {},
        reasons: {
            privacy: 0,
            no_solution: 0,
            human_interaction: 0,
            lengthy_convo: 0,
            chatbot_repetition: 0,
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
            chatbot_repetition: {},
            other: {}
        }
    };

    const [analysedData, setAnalysedData] = useState(initialDataState);

    /**
     * Set the analyzedData constant to get values for the graph.
     * Also, indicates when the loading spinner appears.
     * @param id
     * @returns {Promise<void>}
     */
    const getAnalysedData = async (id) => {
      setLoading(true);
      await AnalyseProjectDataService.analyseProject(id)
        .then((response) => {
          setAnalysedData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      setLoading(false);
    };

    useEffect(async() => {
        await getAnalysedData(id)
    }, []);


    // Setting data for the graph according the current selected project
    // ----------------------------------------------------------------------
    let currentReason; // current title of graph
    let currentColor; // current colour of the graph's bars
    let chartData; // current data displayed by graph

    // The current counter (reason why the user left a chat) is selected when a Creator clicks on the card
    const [currentCounter, setCounter] = useState('Privacy Concerns');

    // Creating the x-axis (i.e., the dates) of the graph. Each x-axis value is stored in list_of_total_convos_per_day.
    const list_of_total_convos_per_day = Object.entries(analysedData.total_convos_per_day);
    list_of_total_convos_per_day.sort();
    const list_of_chartLabels = [];
    for (let i = 0; i < list_of_total_convos_per_day.length; i++) {
        list_of_chartLabels.push(list_of_total_convos_per_day[i][0]);
    }

    /**
     * Return a list of values for each x-axis label of the graph with extra 0's
     * corresponding to the dates when no users leave a chatbot. Each value of the list
     * corresponds to the value in list_of_total_convos_per_day with the same index.
     * @param data
     * @returns {*[]}
     */
    const correctDates = (data) => {
        const dataCopy = {};
        Object.assign(dataCopy, data);

        // If a date on the graph's x-axis is not in this specific reason's dictionary of users leaving,
        // add the date and indicate that 0 users left on that date.
        for (let i = 0; i < list_of_chartLabels.length; i++) {
            if (!(list_of_chartLabels[i] in data)) {
                dataCopy[list_of_chartLabels[i]] = 0;
            }
        }

        const list_of_users_leaving = Object.entries(dataCopy);
        list_of_users_leaving.sort();
        const list_of_chartData = [];

        // A list of the number of users leaving per day, sorted according to the graph's x-axis
        for (let i = 0; i < list_of_users_leaving.length; i++) {
            list_of_chartData.push(list_of_users_leaving[i][1]);
        }
        return list_of_chartData;
    }


    // The data for the graph is chosen based on the current counter
    switch(currentCounter) {
        case 'Unsatisfactory Solutions':
            chartData = correctDates(analysedData.reasons_per_day.no_solution)
            currentReason = 'Unsatisfactory Solutions'
            currentColor = '#FFE16A'
            break
        case 'Chatbot Repetitions':
            chartData = correctDates(analysedData.reasons_per_day.chatbot_repetition)
            currentReason ='Chatbot Repetitions'
            currentColor = '#BAF27F'
            break
        case 'Lengthy Chat Durations':
            chartData = correctDates(analysedData.reasons_per_day.lengthy_convo)
            currentReason = 'Lengthy Chat Durations'
            currentColor = '#74CAFF'
            break
        case 'Live Agent Requests':
            chartData = correctDates(analysedData.reasons_per_day.human_interaction)
            currentReason = 'Live Agent Requests'
            currentColor = '#c9aef3'
            break
        default:
            chartData = correctDates(analysedData.reasons_per_day.privacy)
            currentReason = 'Privacy Concerns'
            currentColor = '#FFA48D'
            break
    }

    // Variables for the loading spinner
    const [loading, setLoading] = useState(true);

    // Displaying the Dashboard UI
    // ----------------------------------------------------------------------
    const theme = useTheme();

    return (
      <div>
        <Navbar />

        {/* Display the loading spinner when the transcripts are being analysed */}
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ClipLoader
              color="blue"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div>

            <br />

            <Container maxWidth="xl">
              {/* PROJECT TITLE */}
              <SelectProject />

              {/* COUNTERS */}
              <Grid container spacing={4}>
                <Grid item md={2.4}>
                  <counterButton onClick={() => setCounter("Privacy Concerns")}>
                    <AppCounter
                      title="Privacy Concerns"
                      total={analysedData.reasons.privacy}
                      color="error"
                      icon={"ant-design:key-outlined"}
                    />
                  </counterButton>
                </Grid>

                <Grid item md={2.4}>
                  <counterButton
                    onClick={() => setCounter("Unsatisfactory Solutions")}
                  >
                    <AppCounter
                      title="Unsatisfactory Solutions"
                      total={analysedData.reasons.no_solution}
                      color="warning"
                      icon={"ant-design:frown-outline"}
                    />
                  </counterButton>
                </Grid>

                <Grid item md={2.4}>
                  <counterButton
                    onClick={() => setCounter("Chatbot Repetitions")}
                  >
                    <AppCounter
                      title="Chatbot Repetitions"
                      total={analysedData.reasons.chatbot_repetition}
                      color="success"
                      icon={"ant-design:comment-outlined"}
                    />
                  </counterButton>
                </Grid>

                <Grid item md={2.4}>
                  <counterButton
                    onClick={() => setCounter("Lengthy Chat Durations")}
                  >
                    <AppCounter
                      title="Lengthy Chat Durations"
                      total={analysedData.reasons.lengthy_convo}
                      color="info"
                      icon={"ant-design:field-time-outlined"}
                    />
                  </counterButton>
                </Grid>

                <Grid item xs={10} md={2.4}>
                  <counterButton
                    onClick={() => setCounter("Live Agent Requests")}
                  >
                    <AppCounter
                      title="Live Agent Requests"
                      total={analysedData.reasons.human_interaction}
                      color="secondary"
                      icon={"ant-design:user-outlined"}
                    />
                  </counterButton>
                </Grid>

                {/* GRAPH */}
                <Grid item xs={12} md={6} lg={8}>
                  <AppGhostGraph
                    title={currentReason}
                    subheader="Month/Day 2022"
                    chartLabels={list_of_chartLabels}
                    chartData={[
                      {
                        name: "Users Leaving due to ".concat(currentReason),
                        type: "column",
                        fill: "solid",
                        color: currentColor,
                        data: chartData,
                      },
                      {
                        name: "Total Users",
                        type: "area",
                        fill: "gradient",
                        color: "#A9A9A9",
                        data: correctDates(analysedData.total_convos_per_day),
                      },
                      {
                        name: "Total Users Leaving",
                        type: "line",
                        fill: "solid",
                        color: "#2F4F4F",
                        data: correctDates(analysedData.total_users_quit_per_day),
                      },
                    ]}
                  />
                </Grid>

                {/* SATISFACTION METER */}
                <Grid item xs={12} md={6} lg={4}>
                  <AppGhostMeter
                    title="Satisfaction Meter"
                    chartData={[
                      {
                        label: "Satisfied with chatbot",
                        value: analysedData.num_satisfied_users,
                      },
                      {
                        label: "Unsatisfied",
                        value: analysedData.num_unsatisfied_users,
                      },
                    ]}
                    chartColors={[
                      theme.palette.success.main,
                      theme.palette.error.light,
                    ]}
                  />
                </Grid>

                {/* MISCELLANEOUS DATA */}
                <Grid item lg={8}>
                  <AppIndexCard
                    title="Miscellaneous"
                    list={[
                      {
                        name: "Average Chat Duration (in seconds)",
                        value: Math.floor(
                          analysedData.avg_duration_time / 1000
                        ),
                        icon: (
                          <Iconify
                            icon={"eva:clock-outline"}
                            color="#1877F2"
                            width={32}
                          />
                        ),
                      },
                      {
                        name: "Average Chat Length (by number of texts)",
                        value: analysedData.avg_duration_text,
                        icon: (
                          <Iconify
                            icon={"eva:activity-outline"}
                            color="#1877F2"
                            width={32}
                          />
                        ),
                      },
                      {
                        name: "Users Quitting due to Other Reasons",
                        value: analysedData.reasons.other,
                        icon: (
                          <Iconify
                            icon={"eva:person-delete-outline"}
                            color="#1877F2"
                            width={32}
                          />
                        ),
                      },
                    ]}
                  />
                </Grid>
              </Grid>

              <div className={"footer"}></div>
            </Container>
          </div>
        )}
      </div>
    );
}
