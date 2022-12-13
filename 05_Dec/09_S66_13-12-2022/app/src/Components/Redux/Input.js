import { useState } from "react";
import myAction from "./action";

function Input(props) {
  const [state, setState] = useState("");

  const sendDataToAnctioCreator = () => {
    myAction(state);
  };
  return (
    <div style={{ padding: "20px 100px" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={sendDataToAnctioCreator}>Submit</button>
    </div>
  );
}

export default Input;
