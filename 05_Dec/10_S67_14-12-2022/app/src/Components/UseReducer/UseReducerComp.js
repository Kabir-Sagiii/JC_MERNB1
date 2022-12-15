import { useReducer } from "react";

let initialState = {
  name: "Kabir Sagar", //  Sneha Reddy
  email: "KS@gmail.com",
  city: "Delhi, India",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "EMAIL":
      state = {
        ...state,
        email: action.payload,
      };
      break;
    case "CITY":
      state = {
        ...state,
        city: action.payload,
      };
      break;
    case "INITIALSTATE":
      state = action.payload;
      break;
  }
  return state;
};

function UseReducerComp(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "50px 100px" }}>
      <dl>
        <dt>
          <b> NAME</b>
        </dt>
        <dd>{state.name}</dd>
        <dt>
          <b>EMAIL</b>
        </dt>
        <dd>{state.email}</dd>
        <dt>
          <b> CITY</b>
        </dt>
        <dd>{state.city}</dd>
      </dl>
      <button
        onClick={() => {
          dispatch({
            type: "NAME",
            payload: "Sneha Reddy",
          });
        }}
      >
        Update Name
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "EMAIL",
            payload: "Sneha@gmail.com",
          });
        }}
      >
        Update Email
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "CITY",
            payload: "London, UK",
          });
        }}
      >
        Update City
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "INITIALSTATE",
            payload: {
              name: "Kabir Sagar",
              email: "KS@gmail.com",
              city: "Delhi, India",
            },
          });
        }}
      >
        Initial State
      </button>
    </div>
  );
}

export default UseReducerComp;
