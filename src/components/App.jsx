import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [currentTime, setTime] = useState(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString()); // passing the current time
  }

  setInterval(updateTime, 1000); // calling "updateTime()" every second to update our state and update <h1> every second

  return (
    <div className="container">
      <h1>Clock <div>{currentTime}</div></h1>
    </div>
  );
}

export default App;
