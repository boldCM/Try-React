import "./App.css";
import CreateInputField from "./components/InputField";
import React, { useState } from "react";

function App() {
  const [toDoArray, setToDoArray] = useState(
    JSON.parse(localStorage.getItem("ToDos")) || []
  );

  return (
    <div className="App">
      <CreateInputField setToDoArray={setToDoArray} />
      <div>{toDoArray}</div>
    </div>
  );
}

export default App;
