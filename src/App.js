import "./App.css";
import CreateInputField from "./components/InputField";
import React, { useState } from "react";

function App() {
  const existingToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
  const [toDoArray, setToDoArray] = useState(existingToDos);
  // Ich brauche noch eine Funktion, die mir beim
  // das neue ToDo dem LocalStorage hinzufügt

  return (
    <div className="App">
      <CreateInputField setToDoArray={setToDoArray} />
      <div>{toDoArray}</div>
      <footer className="snowfall"></footer>
    </div>
  );
}

export default App;
