import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  );
};