import { useState } from "react";
const initialState = {
  stateCard: false,
  dataInfo: [],
};
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addInfo = (payload) => {
    console.log("llegada",payload)
    setState({
      ...state,
      dataInfo:[payload],
    });
  };

  const changeState = (payload) => {
    console.log(state)
    setState(payload);
  };

  return { state, addInfo, changeState };
};

export default useInitialState;
