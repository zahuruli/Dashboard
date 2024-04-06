import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />

        <span>Merinasoft</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/401586491_893883989022474_3841285535362567340_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGIjUpA2PxYvAsHWLiBMRyNXZUYD4zHlq1dlRgPjMeWrb_M3V-4u4_SInZNHfVYHnldYNMJHgvjfJVedMCdY17J&_nc_ohc=j6_lCA6wt90AX_H9RiL&_nc_ht=scontent.fdac139-1.fna&oh=00_AfApy1sVhxjak4K78DHfhrScRh9zeDA5oxz4eenHu4w9gg&oe=65C73397"
            alt=""
            className="icon"
          />
          <span>joy</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
