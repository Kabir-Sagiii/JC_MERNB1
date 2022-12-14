import { useState } from "react";
import { useDispatch } from "react-redux";
import cityAction from "./cityAction";

function City(props) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const sendCityToAction = () => {
    cityAction(city, dispatch);
  };

  return (
    <div style={{ padding: "20px 100px" }}>
      <h2>City Component</h2>
      <select
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        <option>Select City</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>New y</option>
        <option>London</option>
      </select>
      <button style={{ marginLeft: "10px" }} onClick={sendCityToAction}>
        Store City
      </button>
    </div>
  );
}

export default City;
