var initialState = {
  info: "No Data",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME":
      state = {
        ...state,
        info: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
