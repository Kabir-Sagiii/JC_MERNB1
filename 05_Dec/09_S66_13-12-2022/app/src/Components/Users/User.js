import React from "react";
import "./User.css";
import { useState, useEffect } from "react";
function User(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("usefeect calls callback function");

    // getData();

    return () => {
      console.log("Component will be unmounted");
    };
  });

  const getData = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((info) => {
        console.log(info.results);
        setUser(info.results);
      });
  };
  return (
    <div className="userContainer">
      <h2>Users Component</h2>
      <button onClick={getData}>Get Data</button>

      {user.length > 0 ? (
        <ol>
          {user.map((ele, index) => {
            return (
              <li>
                {ele.name.first}
                {ele.name.last}
              </li>
            );
          })}
        </ol>
      ) : (
        <div style={{ color: "red" }}>
          {" "}
          <h2>No Data</h2>{" "}
        </div>
      )}
    </div>
  );
}

export default User;
