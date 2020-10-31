import "./App.css";
import CreateInputField from "./components/InputField";
import React from "react";

function App() {
  function handleSumbit() {
    alert("submitted");
    // Versuch, etwas in den localStorage zu speichen
  }

  return (
    <div className="App">
      <CreateInputField doSomething={handleSumbit()} />
    </div>
  );
}

export default App;
