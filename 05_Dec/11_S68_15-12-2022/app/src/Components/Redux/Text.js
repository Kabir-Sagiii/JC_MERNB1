import React from "react";
import { useSelector } from "react-redux";

function Text(props) {
  const data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ padding: "20px 100px" }}>
      <h2>Text Component</h2>
      <p>Data: {data.myReducer.info}</p>
      <p>City: {data.cityReducer.city}</p>
    </div>
  );
}

export default Text;
