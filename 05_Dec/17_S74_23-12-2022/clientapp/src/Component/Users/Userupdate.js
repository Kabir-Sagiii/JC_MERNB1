import { useState, useEffect } from "react";
import "./NewUser.css";
import { useParams } from "react-router-dom";

function UpdateUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    image: "",
    city: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8001/users/specificuser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          name: data.results[0].name,
          email: data.results[0].email,
          gender: data.results[0].gender,
          image: data.results[0].image,
          city: data.results[0].city,
        });
      });
  }, []);

  const sendData = () => {
    fetch(`http://localhost:8001/users/updateuser/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        setUser({
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
      <h2>Update User Details</h2>
      <div>
        <input
          type="text"
          value={user.name}
          placeholder="Enter Name"
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          value={user.email}
          type="text"
          placeholder="Enter Email"
          onChange={(event) => {
            setUser({
              ...user,
              email: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={user.city}
          placeholder="Enter City"
          onChange={(event) => {
            setUser({
              ...user,
              city: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter User Image URL"
          value={user.image}
          onChange={(event) => {
            setUser({
              ...user,
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
            setUser({
              ...user,
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
            setUser({
              ...user,
              gender: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={sendData}>Update User</button>
      </div>
    </div>
  );
}

export default UpdateUser;
