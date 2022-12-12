import React from "react";

function Electronic(props) {
  const getData = () => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Electonic Component</h2>
      <p>Produc 1</p>
      <p>Produc 2</p>
      <p>Produc 3</p>
      <p>Produc 4</p>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default Electronic;
