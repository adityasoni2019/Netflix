import React from "react";
import "../Components/Nav.css";

const Nav = () => {
  return (
    <div className="nav nav__black">
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
