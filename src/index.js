import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { reducer } from './reducer/index';
import './index.css';
import App from './App';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route exact path='/' element={<App/>}/>
        </Routes>
      </React.StrictMode>  
    </Provider>
  </BrowserRouter>
  
);

export default store;