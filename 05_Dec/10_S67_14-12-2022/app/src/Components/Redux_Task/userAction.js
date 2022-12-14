const userAction = (data, dispatch) => {
  dispatch({
    type: "USERS",
    payload: data,
  });
};

export default userAction;
