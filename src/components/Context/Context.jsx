import React from 'react';

let initialState = {
  hitsCount: 0
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { ...state, hitsCount: state.hitsCount + 1 };
    default:
      return initialState;
  }
};

const HitsCountContext = React.createContext(initialState);
const HitsCountProvider = props => {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <HitsCountContext.Provider value={value}>
      {props.children}
    </HitsCountContext.Provider>
  );
};
export { HitsCountContext, HitsCountProvider };
