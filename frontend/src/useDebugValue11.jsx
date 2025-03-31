import React, { useState, useDebugValue } from "react";


const useDate = () => {
  const [date, setDate] = useState(new Date());

  useDebugValue(date, (d) => d.toLocaleTimeString());

  return date;
};


const App = () => {
  const date = useDate();

  return (
    <div>
      <h2>Current Time: {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default App;
