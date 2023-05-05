import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const ProgressBar = ({ progress }) => {
  return (
    <Box>
      <LinearProgress variant="determinate" value={progress} />
      <Typography>{progress}%</Typography>
    </Box>
  );
};

export default ProgressBar;
