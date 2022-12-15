const jeweleryAction = (data, dispatch) => {
  dispatch({
    type: "JEWELERYS",
    payload: data,
  });
};

export default jeweleryAction;
