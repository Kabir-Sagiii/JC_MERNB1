import { useContext } from "react";
import C from "./C";
import myContext from "./context";

function B(props) {
  const info = useContext(myContext);
  var style = {
    padding: "20px",
    margin: "20px auto",
    boxShadow: "0 0 10px green",
  };
  return (
    <div style={style}>
      <h2>B component</h2>
      <p>{info}</p>
      <C info={props.data} />
    </div>
  );
}

export default B;
