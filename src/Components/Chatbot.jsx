import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const predefinedReplies = [
    {
      keywords: ["available", "cars", "show"],
      response:
        "You can browse our full selection on the homepage. We offer cars like Porsche, BMW M5, and Mercedes AMG.",
    },
    {
      keywords: ["add", "cart"],
      response:
        "Click on the 'Add to Cart' button under the car you like. You can then review your cart before checkout.",
    },
    {
      keywords: ["payment", "methods", "pay"],
      response: "We accept M-Pesa, credit/debit cards, and bank transfers.",
    },
    {
      keywords: ["remove", "delete", "cart"],
      response:
        "Go to your cart and click the 'Remove' button on the item you want to delete.",
    },
    {
      keywords: ["checkout", "buy", "purchase"],
      response:
        "Go to your cart, then click 'Checkout' to proceed to the payment page.",
    },
  ];

  const getBotReply = (inputText) => {
    const lowerInput = inputText.toLowerCase();
    for (const pair of predefinedReplies) {
      if (pair.keywords.some((keyword) => lowerInput.includes(keyword))) {
        return pair.response;
      }
    }
    return "Thanks for your message! (This is a placeholder response)";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = { from: "bot", text: getBotReply(input) };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.from === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
