import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setUserInput("");

      // TODO: Send userInput to the AI model and get the response
      const aiResponse = "This is a sample AI response.";
      setMessages([...messages, { text: userInput, sender: "user" }, { text: aiResponse, sender: "ai" }]);
    }
  };

  return (
    <Box>
      <Typography variant="h6">Chat with AI</Typography>
      <Box>
        {messages.map((message, index) => (
          <Typography key={index} align={message.sender === "user" ? "right" : "left"}>
            {message.text}
          </Typography>
        ))}
      </Box>
      <TextField
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default Chat;
