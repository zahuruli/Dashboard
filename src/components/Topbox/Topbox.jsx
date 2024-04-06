import React from "react";
import "./topbox.scss";
import { topDealUsers } from "../../data";

const Topbox = () => {
  return (
    <div className="topbox">
      <h1>Top deals</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          return (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="userImage" />

                <div className="userText">
                  <span className="username">{user.username}</span>
                  <span className="useremail">{user.email}</span>
                </div>
              </div>

              <span className="amount">${user.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topbox;
