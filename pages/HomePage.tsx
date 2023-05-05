import React, { useState } from "react";
import { Chat, Feedback, Login, ModelTraining, PDFProcessing, UploadPDF } from '../components';

const HomePage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [modelId, setModelId] = useState("");
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
    const handleFileUpload = (uploadedFile: File) => {
      setFile(uploadedFile);
    };
  
    const handleModelTraining = (modelId: string) => {
      setModelId(modelId);
    };
  
    const handlePDFProcessing = (extractedText: string) => {
      setText(extractedText);
    };
  
    const handleMessage = (message: string) => {
      setMessage(message);
    };
  
    const handleFeedbackSubmit = (feedback: string) => {
      setFeedbackSubmitted(true);
    };
  
    return (
      <div>
        <Login />
        <UploadPDF onFileUpload={handleFileUpload} />
        {file && <PDFProcessing file={file} onTextExtract={handlePDFProcessing} />}
        {text && <ModelTraining onModelSelect={handleModelTraining} />}
        {modelId && (
          <Chat text={text} modelId={modelId} onMessage={handleMessage} />
        )}
        {message && !feedbackSubmitted && (
          <Feedback message={message} onFeedbackSubmit={handleFeedbackSubmit} />
        )}
      </div>
    );
  };
  
  export default HomePage;