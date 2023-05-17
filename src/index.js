import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createStore} from 'redux'
//import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
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

