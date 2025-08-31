import React, { useState, useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';
import './Chatbot.css'; // Import the CSS file

// Step 1: Define your rule-based Q&A pairs here
const chatbotRules = {
  "hello": "Hello there! How can I assist you today?",
  "hi": "Hi! Welcome to VetMaxBio. What do you need help with?",
  "what are your services?": "We provide veterinary diagnostics, lab testing, and biotechnology solutions for animal health.",
  "how to contact?": "You can reach us at contact@vetmaxbio.com or call us at (555) 123-4567.",
  "where are you located?": "Our main lab is located at 123 Science Park Drive, Innovation City.",
  "do you offer tests for dogs?": "Yes, we offer a comprehensive range of diagnostic tests for dogs, including blood panels, allergy tests, and genetic screening.",
  "what are your hours?": "Our customer service team is available Monday to Friday, 9 AM to 5 PM EST.",
  "how to order a test kit?": "Test kits can be ordered directly through our website's shop section or by calling our customer service line.",
  "what is your return policy?": "Please refer to our 'Terms & Conditions' page for detailed information on returns and refunds.",
  "thank you": "You're welcome! Is there anything else you need?",
  // Default response if no rule matches
  "default": "I'm sorry, I didn't understand that. Could you please try asking something else or choose from the options below?"
};

// Step 2: Create an array of suggested questions from the rules
const suggestedQuestions = [
  "What are your services?",
  "How to contact?",
  "Where are you located?",
  "Do you offer tests for dogs?",
  "What are your hours?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const { darkMode } = useContext(ThemeContext);

  // Step 3: The new rule-based sendMessage function
  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input immediately after sending

    // Simulate a slight delay for a more natural chat feel
    setTimeout(() => {
      // Convert user input to lowercase for easier matching
      const userInput = input.trim().toLowerCase();
      
      // Look for a matching rule. Use 'default' if no match is found.
      const botReply = chatbotRules[userInput] || chatbotRules["default"];
      
      const botMessage = { sender: "bot", text: botReply };
      setMessages((prev) => [...prev, botMessage]);
    }, 500); // 500ms delay
  }

  // New function to handle when a user clicks a suggested question
  function handleSuggestionClick(question) {
    setInput(question); // Populate the input field with the question
    // Note: We don't send it automatically. User can edit it or just press Send.
  }

  return (
    <div className={`chatbot-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-button"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>VetMaxBio Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 cross"
            >
              ✕
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.sender === "user" ? "user-message" : "bot-message"}
              >
                {msg.text}
              </div>
            ))}
            
            {/* Step 4: Render suggested questions only after the first message */}
            {messages.length <= 1 && (
              <div className="suggestions-container">
                <p>You can ask me about:</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggestion-button"
                    onClick={() => handleSuggestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}