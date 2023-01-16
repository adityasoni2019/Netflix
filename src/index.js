import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { router } from './App';

/*
All this stuff (below) was used initially. Check the inital repos without react-router-dom being used, you'll find all these things (below) being used 

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  );
  
*/

// There isn't really a lot of difference in what's there right now, and what was there before.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
