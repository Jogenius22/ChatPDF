import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const PDFProcessing = ({ file }) => {
  const [processingProgress, setProcessingProgress] = useState(0);

  useEffect(() => {
    const processPDF = async () => {
      // TODO: Extract and preprocess the text from the PDF
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
