import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listitem) => {
              return (
                <Link to={"/"} className="listItem" key={listitem.id}>
                  <img src={listitem.icon} alt="home" />
                  <span className="listItmeTitle">{listitem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
