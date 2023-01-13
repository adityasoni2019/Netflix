
import React, { useEffect, useState } from "react";
import "../Components/Nav.css";

const Nav = () => {

  const [show, setShow] = useState(false); 
  // here, show var is for the nav bar. i.

  const transitionNavBar = () =>{
    window.scrollY> 100? setShow(true): setShow(false); 
  };

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar); 
    // this ^ isn't really required, but it's a good practice to clean up. 
  }, []);  
// we're using [], cause, we only want it to run when the component mounts.

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {/* This (below) is the logo */}
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        {/* This (below) is the avatar */}
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix logo"
        />
      </div>
      {/* This is the nav Bar. */}
    </div>
  );
};

export default Nav;
