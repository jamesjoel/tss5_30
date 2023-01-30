import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './redux/userReducer';
import studentReducer from './redux/stuReducer'
import productReducer from './redux/productReducer'
import { BrowserRouter } from 'react-router-dom';

const rootReducer = combineReducers({
  userReducer,
  studentReducer,
  productReducer
})

const collection = configureStore({
  
  reducer : rootReducer
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
      <Provider store={collection}>
        <App />
      </Provider>
      </BrowserRouter>

  </React.StrictMode>
);


