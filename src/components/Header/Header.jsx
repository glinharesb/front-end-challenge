import React from "react";

import "./Header.scss";
import Logo from "../../images/logo-black.svg";
import Nav from "../../images/nav.svg";
import Cart from "../../images/cart.svg";
import Search from "../../images/search.svg";
import User from "../../images/user.svg";

class Header extends React.Component {
  render() {
    return (
    <div className="Header">
      <div className="row">
        <div className="nav">
          <img src={Nav} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="cart">
          <div className="myaccount">
            <img src={User} alt="" />
            <span>Minha Conta</span>
          </div>
          <img src={Cart} alt="" />
          <span id="clicks" className="items">
            {window.localStorage.getItem("cart")}
          </span>
        </div>
        <div className="search">
          <input type="text" placeholder="O que está procurando?" />
        </div>
      </div>
    </div>
  )}
}

export default Header;