import { useContext } from "react";
import myContext from "./context";

function D(props) {
  const data = useContext(myContext);
  var style = {
    padding: "20px",
    margin: "20px auto",
    boxShadow: "0 0 20px red",
  };
  return (
    <div style={style}>
      <h2>D component</h2>
      <p>{data}</p>
    </div>
  );
}

export default D;
