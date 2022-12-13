import myStore from "./Store";
const myAction = (componentData) => {
  myStore.dispatch({
    type: "NAME",
    payload: componentData,
  });
};

export default myAction;
