import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContent";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { cartItems, token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  //removing token from the local storage-----------------------------------------------------------------------------------
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(""); // Add this line
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          style={{
            borderBottom: menu === "shop" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/"> Shop</Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          style={{
            borderBottom: menu === "men" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/men">Men</Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          style={{
            borderBottom: menu === "women" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/women">Women</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          style={{
            borderBottom: menu === "kids" ? "4px solid #ff4141" : "none",
          }}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="navbar__cart">
        {!token ? (
          <button onClick={() => navigate("/login")}> sign in</button>
        ) : (
          <div className="navbar-profile">
            <button onClick={logOut}>LogOut</button>
          </div>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <span className="cart_count">{getTotalCartItems()}</span>
      </div>
    </div>
  );
}
