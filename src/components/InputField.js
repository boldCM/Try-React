import React, { useState } from "react";
import "./InputField.css";
import updateToDo from "../utils/UpdateToDo";

export default function CreateInputField({ setToDoArray }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form
        className="inputForm"
        onSubmit={(event) => {
          event.preventDefault();
          // standardmäßig wird beim submitten die Seite neugeladen
          // daher halten wir das mit preventDefault auf.
          const newList = updateToDo(inputValue);
          setInputValue(inputValue);
          setToDoArray(newList);
          // hier noch überprüfen mit Schreibweise und was wie übergeben wird:(und natürlich import!)
        }}
      >
        <input
          type="text"
          placeholder="Getting things done"
          className="inputField"
          //   value={inputValue}

          // irgendwas von Benji:
          // onChange={(event) => {
          //   setInputValue(event.target.value);
          //   console.log(event);
          // }}

          //   event ist ein Objekt
          // target ist der Property von dem Objekt
          //value ist das dazugerhörige value
        ></input>

        <button type="submit" className="submitButton">
          Remember me!
        </button>
      </form>
    </div>
  );
}
