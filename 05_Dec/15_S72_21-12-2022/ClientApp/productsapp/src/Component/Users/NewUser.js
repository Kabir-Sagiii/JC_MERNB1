import { useState } from "react";
import "./NewUser.css";

function NewUser(props) {
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    gender: "",
    image: "",
    city: "",
  });

  const sendDataToServer = () => {
    console.log(newuser);
    fetch("http://localhost:8001/users/newuser", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Inserted Data Succesfully");
        setNewUser({
          name: "",
          email: "",
          gender: "",
          image: "",
          city: "",
        });
      });
  };
  return (
    <div className="formContainer">
      <h2>Register User</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              email: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter City"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              city: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter User Image URL"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              image: event.target.value,
            });
          }}
        />
      </div>
      <div>
        Male:{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              gender: event.target.value,
            });
          }}
        />
        Female:{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              gender: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={sendDataToServer}>Register New User</button>
      </div>
    </div>
  );
}

export default NewUser;
