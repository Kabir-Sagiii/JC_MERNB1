import React from "react";
import "./Child.css";

function Child(props) {
  return (
    <div className="childContainer">
      <h2>Child Component</h2>
      <input type="text" />
      <button>Send To Parent</button>
      <p>Parent Data : {props.data}</p>
    </div>
  );
}

export default Child;
