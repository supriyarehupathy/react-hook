import React from 'react';
const initialState = {
  hitsCount: 2,
  updateHitCount: () => {
    console.log('dsd');
    return 3;
  }
}; //ToDo: Update context
const HitsCountContext = React.createContext(initialState);
const HitsCountProvider = props => {
  return (
    <HitsCountContext.Provider value={initialState}>
      {props.children}
    </HitsCountContext.Provider>
  );
};
export { HitsCountContext, HitsCountProvider };
