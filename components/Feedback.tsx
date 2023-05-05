import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

interface FeedbackProps {
  message: string;
  onFeedbackSubmit?: (feedback: string) => void;
}

const Feedback = ({ message, onFeedbackSubmit }: FeedbackProps) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (onFeedbackSubmit) {
      onFeedbackSubmit(feedback);
    }
    setFeedback("");
    alert("Thank you for your feedback!");
  };

  return (
    <Box>
      <Typography variant="h6">Provide Feedback on AI Response</Typography>
      <Typography>{message}</Typography>
      <TextField
        label="Your Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        fullWidth
        multiline
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </Box>
  );
};

export default Feedback;
