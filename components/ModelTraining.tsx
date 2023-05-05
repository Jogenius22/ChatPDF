import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

interface ModelTrainingProps {
  text: string;
  onModelSelect: (modelId: string) => void;
}

const ModelTraining = ({ text }: ModelTrainingProps) => {
  const [trainingProgress, setTrainingProgress] = useState(0);

  useEffect(() => {
    const trainModel = async () => {
      // Simulate training progress, replace with actual API call
      for (let i = 0; i <= 100; i += 10) {
        setTimeout(() => setTrainingProgress(i), i * 100);
      }
    };

    if (text) {
      trainModel();
    }
  }, [text]);

  return (
    <div>
      <Typography variant="h6">Training AI Model</Typography>
      <ProgressBar progress={trainingProgress} />
    </div>
  );
};

export default ModelTraining;
