import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

interface PDFProcessingProps {
  file: File;
  onTextExtracted: (text: string) => void;
}

const PDFProcessing = ({ file }: PDFProcessingProps) => {
  const [processingProgress, setProcessingProgress] = useState(0);

  useEffect(() => {
    const processPDF = async () => {
      // Simulate processing progress, replace with actual API call
      for (let i = 0; i <= 100; i += 10) {
        setTimeout(() => setProcessingProgress(i), i * 100);
      }
    };

    if (file) {
      processPDF();
    }
  }, [file]);

  return (
    <div>
      <Typography variant="h6">Processing PDF</Typography>
      <ProgressBar progress={processingProgress} />
    </div>
  );
};

export default PDFProcessing;
