import { useState } from "react";

import Child from "../Child/Child";
import "./Parent.css";

function Parent(props) {
  const [state, setState] = useState("No Data");
  const [childData, setChildData] = useState("");

  const sendData = () => {
    // var inputData = document.getElementById("i1").value;
    // setState(inputData);

    setState(document.getElementById("i1").value);
  };

  return (
    <div className="parentContainer">
      <h2>Parent Component</h2>
      <input type="text" placeholder="Enter Text" id="i1" />
      <button onClick={sendData}>Submit</button>
      <p>Child Data :{childData} </p>
      <Child data={state} fn={setChildData} />
    </div>
  );
}

export default Parent;
