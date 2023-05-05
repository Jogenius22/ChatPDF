import React, { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

interface UploadPDFProps {
  onFileUpload?: (file: File) => void;
}

const UploadPDF: React.FC<UploadPDFProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile && uploadedFile.size <= 25 * 1024 * 1024) {
      setFile(uploadedFile);
      if (onFileUpload) {
        onFileUpload(uploadedFile);
      }
    } else {
      alert("Please upload a file with a maximum size of 25MB.");
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
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
        onClick={handleChooseFileClick}
      >
        Choose File
      </Button>
      {file && (
        <div>
          <Typography>{file?.name}</Typography>
          <ProgressBar progress={uploadProgress} />
        </div>
      )}
    </div>
  );
};

export default UploadPDF;
