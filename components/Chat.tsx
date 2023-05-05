import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

interface Message {
  text: string;
  sender: "user" | "ai";
}

const Chat = ({ modelId }: { modelId: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setUserInput("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput, modelId }),
        });
        const data = await response.json();
        setMessages([
          ...messages,
          { text: userInput, sender: "user" },
          { text: data.response, sender: "ai" },
        ]);
      } catch (error) {
        console.error("Error:", error);
      }
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
