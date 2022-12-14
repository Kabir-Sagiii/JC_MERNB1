const cityAction = (cityName, dispatch) => {
  dispatch({
    type: "CITY",
    city: cityName,
  });
};

export default cityAction;
