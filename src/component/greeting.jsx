import { useState } from "react";

function Greeting() {
  const [message, setMessage] = useState("Greeting Message");

  return (
    <div className="greeting">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={() => setMessage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setMessage("Hi!")}>Hi!</button>
        <button onClick={() => setMessage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default Greeting;
