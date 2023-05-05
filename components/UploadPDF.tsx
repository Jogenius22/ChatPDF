import React, { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const UploadPDF = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.size <= 25 * 1024 * 1024) {
      setFile(uploadedFile);
    } else {
      alert("Please upload a file with a maximum size of 25MB.");
    }
  };

  const handleSubmit = async () => {
    // TODO: Upload the file to Firebase and show the upload progress
  };

  return (
    <div>
      <Typography variant="h6">Upload a PDF</Typography>
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        hidden
        onChange={handleFileUpload}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => fileInputRef.current.click()}
      >
        Choose File
      </Button>
      {file && (
        <div>
          <Typography>{file.name}</Typography>
          <ProgressBar progress={uploadProgress} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadPDF;
