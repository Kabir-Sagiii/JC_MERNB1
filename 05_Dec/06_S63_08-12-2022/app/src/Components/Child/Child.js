import React from "react";
import "./Child.css";

function Child(props) {
  const sendDataToParent = () => {
    var inputValue = document.getElementById("inputId").value;

    props.fn(inputValue);
  };
  return (
    <div className="childContainer">
      <h2>Child Component</h2>
      <input type="text" id="inputId" />
      <button onClick={sendDataToParent}>Send To Parent</button>
      <p>Parent Data : {props.data}</p>
    </div>
  );
}

export default Child;
