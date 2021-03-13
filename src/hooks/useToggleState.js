import React, { useState } from 'react';
const useToggleState = (initialState = true) => {
    // set intial state
  const [state, setState] = useState(initialState);
//   write func to toggle
  const toggleState = () => {
    setState(state => !state)
  }
//  note return
  return [state, toggleState]
}
export default useToggleState;





