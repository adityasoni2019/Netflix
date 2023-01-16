import React from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import LoginScreen from './Pages/Login/LoginScreen';

// aight, so there's this new react router version. And, now, basically, all the "re-directions" happen through this const router, which is then exported to index.js
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

function App() {

  const user = false; 

  return (
    <div className="app">
      {
        // if there's a user
        !user ? (
          <LoginScreen/>
        ) : (
          <HomeScreen/>
        )
      }
      {/* <h1>
        <HomeScreen/>
      </h1> */}
    </div>
  );
}




export default App;
