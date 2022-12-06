import { useState } from "react";

function Text(props) {
  let [state, setState] = useState("Hello React");

  //   var content = "Welcome to React World";

  function changeContent() {
    // console.log(state);
    // state = "State Concept"; // Dont upate like this
    // console.log(state);
    // console.log(content);
    // content = "Hello React";
    // console.log(content);

    setState("State Concept is Introduced");
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Text Component</h2>
      <div
        style={{
          textAlign: "center",
          boxShadow: "0 0 10px black",
          width: "300px",
          margin: "10px auto",
          padding: "30px 50px",
        }}
      >
        <h3 style={{ color: "green" }}>{state}</h3>
        <button onClick={changeContent}>Change Text</button>
      </div>
    </div>
  );
}

export default Text;
