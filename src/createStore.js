import countReducer from './reducers/countReducer'; 
import candyReducer from './reducers/candyReducer'; 
import { render } from 'react-dom';

const createStore = (countReducer) => {
  // add your code here
  let state; 
  const getState = () => {
    return countReducer(state, {type: 'default'})
  }

  const dispatch = (action) => {
    countReducer(state, action);
    render();  
  }

  return {dispatch, getState}; 
}

export default createStore; 

