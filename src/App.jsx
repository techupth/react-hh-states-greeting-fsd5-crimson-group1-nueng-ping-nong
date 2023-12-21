import { useState } from "react";
import "./App.css";

function App() {
  let [greetingMassage, setGreetingMassage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMassage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMassage("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingMassage("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingMassage("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
