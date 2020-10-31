import React, { useState } from "react";
import "./InputField.css";

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
          setToDoArray(inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Getting things done"
          className="inputField"
          //   value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            console.log(event);
          }}

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
