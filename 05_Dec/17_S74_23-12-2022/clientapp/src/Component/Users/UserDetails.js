import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var cardStyle = {
  width: "300px",
  padding: "20px",
  margin: "50px auto",
  boxShadow: "0 0 10px black",
  textAlign: "center",
};

function UserDetails(props) {
  const [state, setState] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8001/users/specificuser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setState(data.results);
      });
  }, []);
  return (
    <div>
      {state.length > 0 ? (
        <div style={cardStyle}>
          <img src={state[0].image} width="100%" height="300" />
          <h3>{state[0].name}</h3>
          <h4>{state[0].gender}</h4>
          <h4>{state[0].email}</h4>
          <h4>{state[0].city}</h4>
        </div>
      ) : (
        <div> Data is not available </div>
      )}
    </div>
  );
}

export default UserDetails;
