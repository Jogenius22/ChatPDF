import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Feedback = ({ message }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // TODO: Send feedback to the backend for further processing
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
