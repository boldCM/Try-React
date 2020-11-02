import "./OutputField.css";
import React from "react";

export default function CreateOutputField({ toDoArray }) {
  //   const createList = (toDoArray) => {
  //     toDoArray.map((item) => <li> {item} </li>);
  //   };
  // irgendwas war mit .map bzw ich will mehrere Zeilen

  return (
    <div className="outputField">
      {toDoArray}
      <button className="deleteButton">Delete</button>
    </div>
  );
}
