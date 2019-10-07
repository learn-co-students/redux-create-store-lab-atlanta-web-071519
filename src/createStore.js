import countReducer from './reducers/countReducer'; 
import candyReducer from './reducers/candyReducer'; 

export default function createStore(countReducer) {
  // add your code here
  let state = 0;
 
  function dispatch(action) {
    state = countReducer(state, action);
  }
 
  function getState() {
    return state;
  };
 
  return {
    dispatch,
    getState
  };
}


