import React from "react";
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Card} from '@mui/material';
// components
import Iconify from "../dashboard/components/iconify";
// sections
import {
    AppOrderTimeline,
    AppGhostMeter,
    AppGhostGraph,
    AppTrafficBySite,
    AppCounter,
    AppConversionRates,
} from '../dashboard/app';

import SelectProject from "../components/SelectProject";
import Navbar from "../components/Navbar";


export default function Dashboard() {
    const theme = useTheme();

    return (
        <div>
            <Helmet>
                <title> Ghostboard </title>
            </Helmet>

            <Navbar />
            <br />

            <Container maxWidth="xl">
                <SelectProject />

                {/*<Typography variant="h5" sx={{ mb: 5 }}>*/}
                {/*    Analytics for {projectName}*/}
                {/*</Typography>*/}

                {/*COUNTERS*/}
                <Grid container spacing={4}>
                    <Grid item xs={10} sm={1} md={2.3}>
                        <AppCounter title="Privacy Concerns" total={714000} icon={'ant-design:android-filled'} />
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <AppCounter title="Unsatisfactory Solutions" total={1352831} color="info" icon={'ant-design:frown-outline'} />
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <AppCounter title="Chatbot Repetitions" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <AppCounter title="Lengthy Chat Durations" total={45235} color="error" icon={'ant-design:bug-filled'} />
                    </Grid>

                    <Grid item xs={10} sm={1} md={2.3}>
                        <AppCounter title="Live Agent Requests" total={234} color="error" icon={'ant-design:bug-filled'} />
                    </Grid>

                    {/*TODO: Change the graph / make it so that a specific graph appears when you click on a counter*/}
                    <Grid item xs={12} md={6} lg={8}>
                        <AppGhostGraph
                            title="Privacy Concerns"
                            subheader="(+43%) than last year"
                            chartLabels={[
                                '01/01/2003',
                                '02/01/2003',
                                '03/01/2003',
                                '04/01/2003',
                                '05/01/2003',
                                '06/01/2003',
                                '07/01/2003',
                                '08/01/2003',
                                '09/01/2003',
                                '10/01/2003',
                                '11/01/2003',
                            ]}
                            chartData={[
                                {
                                    name: 'Team A',
                                    type: 'column',
                                    fill: 'solid',
                                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
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
                            title="GhostMeter"
                            chartData={[
                                { label: 'Privacy Concerns', value: 4344 },
                                { label: 'Unsatisfactory Solutions', value: 5435 },
                                { label: 'Chatbot Repetitions', value: 1443 },
                                { label: 'Lengthy Chat Durations', value: 4443 },
                                { label: 'Live Agent Requests', value: 4443 },
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppConversionRates
                            title="Conversion Rates"
                            subheader="(+43%) than last year"
                            chartData={[
                                { label: 'Italy', value: 400 },
                                { label: 'Japan', value: 430 },
                                { label: 'China', value: 448 },
                                { label: 'Canada', value: 470 },
                                { label: 'France', value: 540 },
                                { label: 'Germany', value: 580 },
                                { label: 'South Korea', value: 690 },
                                { label: 'Netherlands', value: 1100 },
                                { label: 'United States', value: 1200 },
                                { label: 'United Kingdom', value: 1380 },
                            ]}
                        />
                    </Grid>


                    <Grid item xs={12} md={6} lg={4}>
                        <AppOrderTimeline
                            title="Order Timeline"
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.datatype.uuid(),
                                title: [
                                    '1983, orders, $4220',
                                    '12 Invoices have been paid',
                                    'Order #37745 from September',
                                    'New order placed #XF-2356',
                                    'New order placed #XF-2346',
                                ][index],
                                type: `order${index + 1}`,
                                time: faker.date.past(),
                            }))}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppTrafficBySite
                            title="Traffic by Site"
                            list={[
                                {
                                    name: 'FaceBook',
                                    value: 323234,
                                    icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                                },
                                {
                                    name: 'Google',
                                    value: 341212,
                                    icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                                },
                                {
                                    name: 'Linkedin',
                                    value: 411213,
                                    icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                                },
                                {
                                    name: 'Twitter',
                                    value: 443232,
                                    icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                                },
                            ]}
                        />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}
