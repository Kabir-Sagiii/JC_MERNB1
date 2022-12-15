const electronicAction = (data, dispatch) => {
  dispatch({
    type: "ELECTRONICS",
    payload: data,
  });
};

export default electronicAction;
