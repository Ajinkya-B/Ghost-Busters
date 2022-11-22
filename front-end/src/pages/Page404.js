import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// images
import ghost_404 from "../images/ghost-404.png"

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
    return (
        <>
            <Helmet>
                <title> 404 Page Not Found </title>
            </Helmet>

            <Container>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Our application never wants to ghost you!
                        <br />
                        Perhaps you’ve mistyped the URL?
                    </Typography>

                    <Box
                        component="img"
                        src={ghost_404}
                        sx={{ height: 250, my: { sm: 5 } }}
                    />

                    <br />

                    <Button to="/" size="large" variant="contained" component={RouterLink}>
                        Go Home
                    </Button>
                </StyledContent>
            </Container>
        </>
    );
}
