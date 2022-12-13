import React from "react";
import "./Profile.css";
import { useState } from "react";

function Profile(props) {
  //   let [name, setName] = useState("Rajiv Mehta");
  //   let [city, setCity] = useState("Delhi");
  //   let [email, setEmail] = useState("Rajiv@gmail.com");
  //   let [image, setImage] = useState(
  //     "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg"
  //   );
  let [userdata, setUserData] = useState({
    name: "Rajiv Verma",
    city: "Pune",
    email: "Rajiv@gmail.com",
    image:
      "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg",
  });

  let [bgColor, setBgColor] = useState("white");
  let [textColor, setTextColor] = useState("black");

  const changeData = (event) => {
    // alert(event.target.innerText);
    if (event.target.innerText === "Chris") {
      setUserData({
        name: "Chris",
        city: "Mumbai",
        email: "Chris@gmail.com",
        image:
          "https://th.bing.com/th/id/OIP.9Nr-W1-pxSrgdwDTqrpwEgHaLG?pid=ImgDet&rs=1",
      });

      //   setName("Chris");
      //   setCity("Mumbai");
      //   setEmail("Chris@gmail.com");
      //   setImage(
      //     "https://th.bing.com/th/id/OIP.9Nr-W1-pxSrgdwDTqrpwEgHaLG?pid=ImgDet&rs=1"
      //   );
    } else {
      setUserData({
        name: "Rajiv Verma",
        city: "Pune",
        email: "Rajiv@gmail.com",
        image:
          "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg",
      });
      //   setName("Rahiv");
      //   setCity("Delhi");
      //   setEmail("Rajiv@gmail.com");
      //   setImage(
      //     "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg"
      //   );
    }
  };

  const changeColor = (event) => {
    // alert(event.target.checked);
    if (event.target.checked) {
      setBgColor("black");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  };

  return (
    <div
      className="profileContainer"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div style={{ width: "35%" }}>
        <img src={userdata.image} width="100%" height="100%" />
      </div>

      <div style={{ width: "65%", padding: "30px" }}>
        <dl>
          <dt>
            <b>User Name:</b>
          </dt>
          <dd>{userdata.name}</dd>
          <dt>
            <b>User City:</b>
          </dt>
          <dd>{userdata.city}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{userdata.email}</dd>
          <dt>
            <b>Description:</b>
          </dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            illo ratione rem autem exercitationem blanditiis iure nam! Culpa
            perspiciatis dolorem quo eveniet cupiditate minus aliquid ducimus
            nam! Fugit, quibusdam rem!
          </dd>
        </dl>
        <button onClick={changeData}>Rajiv</button>&nbsp;&nbsp;
        <button onClick={changeData}>Chris</button>
        <br />
        <br />
        <input type="checkbox" onChange={changeColor} /> Check to Switch to Dark
        Mode
      </div>
    </div>
  );
}

export default Profile;
