import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Box>
      <LinearProgress variant="determinate" value={progress} />
      <Typography>{progress}%</Typography>
    </Box>
  );
};

export default ProgressBar;
