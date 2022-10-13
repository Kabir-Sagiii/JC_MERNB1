function usestate(defaultData) {
  var state = defaultData;

  function setState(updatedDtate) {
    state = updatedDtate;
  }

  return [state, setState];
}

const [state, setState] = usestate(0);

setState(10);
