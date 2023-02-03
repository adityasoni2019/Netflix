import React from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import LoginScreen from './Pages/Login/LoginScreen';

// aight, so there's this new react router version. And, now, basically, all the "re-directions" happen through this const router, which is then exported to index.js
const user = true; 

function App() {
  
  return (
    <div className="app">
      {
        // if there isn't a user
        !user ? (
          <LoginScreen/>
        ) : (
          <HomeScreen/>
        )
      }
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginScreen/>
  }
]);


export default App;
