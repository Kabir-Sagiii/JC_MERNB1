var initialState = {
  info: "No Data",
  user: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        info: action.payload,
      };
      break;

    case "USERS":
      state = {
        ...state,
        user: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
