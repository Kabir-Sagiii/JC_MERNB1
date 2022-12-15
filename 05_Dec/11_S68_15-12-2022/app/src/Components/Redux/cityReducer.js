let initialCity = {
  city: "Dummy city",
};
const cityReducer = (state = initialCity, action) => {
  switch (action.type) {
    case "CITY":
      state = {
        ...state,
        city: action.city,
      };
      break;
  }
  return state;
};

export default cityReducer;
