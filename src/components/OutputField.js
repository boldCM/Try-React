import "./OutputField.css";
import React from "react";

export default function CreateOutputField({ toDoArray }) {
  return (
    <div className="outputField">
      {toDoArray}
      <button className="deleteButton">Delete</button>
    </div>
  );
}
