var initialState = {
  info: "No Data",
  user: [],
  electronics: [],
  jewelery: [],
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

    // case "ELECTRONICS":
    //   state = {
    //     ...state,
    //     electronics: action.payload,
    //   };
    //   break;
    case "JEWELERYS":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
  }

  return state;
};

export default myReducer;
