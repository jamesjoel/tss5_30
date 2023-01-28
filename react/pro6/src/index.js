import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userReducer';
import { BrowserRouter } from 'react-router-dom';



const collection = configureStore({
  
  reducer : userReducer
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


