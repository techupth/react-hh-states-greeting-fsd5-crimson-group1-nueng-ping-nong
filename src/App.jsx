import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const greetingThaiMessage = () => {
    setGreetingMessage("สวัสดี!");
  };

  const greetingEnglishMessage = () => {
    setGreetingMessage("Hi!");
  };

  const greetingChineseMessage = () => {
    setGreetingMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={greetingThaiMessage}>สวัสดี!</button>
        <button onClick={greetingEnglishMessage}>Hi!</button>
        <button onClick={greetingChineseMessage}>你好!</button>
      </div>
    </div>
  );
}

export default App;
