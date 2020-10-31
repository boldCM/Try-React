import React from "react";
import "./InputField.css";

export default function CreateInputField({ doSomething }) {
  return (
    <div>
      <form className="inputForm">
        <input
          type="text"
          placeholder="Getting things done"
          className="inputField"
          onSubmit={doSomething}
        ></input>
        {/* <label>Ich weiß nicht, was das ist</label> */}
        <button type="submit" className="submitButton">
          Remember me!
        </button>
      </form>
    </div>
  );
}
