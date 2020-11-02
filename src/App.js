import "./App.css";
import CreateInputField from "./components/InputField";
import React, { useState } from "react";

function App() {
  const existingToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
  const [toDoArray, setToDoArray] = useState(existingToDos);
  // Ich brauche noch eine Funktion, die mir beim
  // das neue ToDo dem LocalStorage hinzufügt
  function updateToDo(toDo) {
    let existingToDos = null;
    try {
      existingToDos = JSON.parse(localStorage.getItem("ToDos"));
    } catch (error) {
      console.error(error);
      existingToDos = [];
    }

    if (!existingToDos.includes(toDo)) {
      const newToDo = [...existingToDos, toDo];
      localStorage.setItem("ToDos", JSON.stringify(newToDo));
      return newToDo;
      // müsste ToDo hier nicht das inputValue aus dem UseState aus der InputField.js sein?
    }
    return existingToDos;
  }

  return (
    <div className="App">
      <CreateInputField setToDoArray={setToDoArray} />
      <div>{toDoArray}</div>
    </div>
  );
}

export default App;
