import "./App.css";
import CreateInputField from "./components/InputField";
import React, { useState } from "react";
import CreateOutputField from "./components/OutputField";

function App() {
  const existingToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
  const [toDoArray, setToDoArray] = useState(existingToDos);

  return (
    <div className="App">
      <CreateInputField setToDoArray={setToDoArray} />
      <CreateOutputField toDoArray={toDoArray} />
      <footer className="snowfall"></footer>
    </div>
  );
}

export default App;
