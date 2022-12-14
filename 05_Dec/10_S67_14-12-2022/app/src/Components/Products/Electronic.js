import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Electronic(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "green" }}>Electonic Component</h2>
      {state.length > 0 ? (
        <ul type="none">
          {state.map((ele) => {
            return (
              <li style={{ marginTop: "20px" }}>
                <Link
                  to={`/productdetails/${ele.id}`}
                  style={{ color: "blue" }}
                >
                  {ele.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <h4>Loading.....</h4>{" "}
        </div>
      )}

      {/* <button onClick={getData}>Get Data</button> */}
    </div>
  );
}

export default Electronic;
