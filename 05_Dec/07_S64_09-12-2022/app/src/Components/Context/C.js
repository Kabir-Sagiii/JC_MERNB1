import React from "react";
import D from "./D";

function C(props) {
  var style = {
    padding: "20px",
    margin: "20px auto",
    boxShadow: "0 0 10px coral",
  };
  return (
    <div style={style}>
      <h2>C component</h2>

      <D data={props.info} />
    </div>
  );
}

export default C;
