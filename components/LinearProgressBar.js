import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material';
import { green } from '@mui/material/colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[400],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: green[500],
  },
}));

export default function LinearProgressBar({ value }) {
  const vs = value > 99 ? 100 : value;

  return <BorderLinearProgress variant="determinate" value={vs} />;
}
