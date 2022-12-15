import React from "react";
import B from "./B";
import myContext from "./context";

function A(props) {
  const [state, setState] = React.useState("React Context");

  var style = {
    width: "500px",
    padding: "20px",
    margin: "30px auto",
    boxShadow: "0 0 30px black",
  };

  const changeData = () => {
    setState("Context is Updated");
  };
  return (
    <div style={style}>
      <h2>A component</h2>
      <button onClick={changeData}>Update</button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
