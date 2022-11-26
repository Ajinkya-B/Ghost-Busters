// This component displays the counters (i.e., the reasons why users are leaving chatbots and
// the number of users who left).

import React from "react";
// @mui
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import {fShortenNumber, fNumber} from "../utils/formatNumber";
// components
import Iconify from "../app-components/iconify";


// The icons in a counter
const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// Parameters for a counter
AppCounter.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppCounter({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        backgroundColor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
       <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      { total ?
          <Typography variant="h3">{fShortenNumber(total)}</Typography> :
          <Typography variant="h3">{fNumber(total)}</Typography>
      }

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
