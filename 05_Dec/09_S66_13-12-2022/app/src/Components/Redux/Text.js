import React from "react";
import { useSelector } from "react-redux";

function Text(props) {
  const data = useSelector((storedata) => {
    return storedata.info;
  });
  return (
    <div style={{ padding: "20px 100px" }}>
      <h2>Text Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default Text;
