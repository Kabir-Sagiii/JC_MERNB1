import { useState } from "react";
function Counter(props) {
  let [count, setCount] = useState(0);

  function updateCountValue() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h2>Counter App</h2>
      <div
        style={{
          textAlign: "center",
          boxShadow: "0 0 10px black",
          width: "300px",
          margin: "10px auto",
          padding: "30px 50px",
        }}
      >
        <h3 style={{ color: "orange" }}>Count Value is {count}</h3>
        <button onClick={updateCountValue}>Like {count}</button>
      </div>
    </div>
  );
}

export default Counter;
