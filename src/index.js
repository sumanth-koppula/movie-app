import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createStore,applyMiddleware} from 'redux'
//import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = function({dispatcher,getState}){
//   return function (next){
//     return function (action){
//       console.log('ACTION_TYPE', action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch,getState}) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('ACTION TYPE',action.type);
  }
  
  next(action);
}
// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log('After state',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App store={store} />
  
  </React.StrictMode>
);

