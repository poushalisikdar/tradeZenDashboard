import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isProfiledropdown, setisProfiledropdown] = useState(false);

  const handleMenuclick = (index) => {
    setSelectedMenu(index);
  };

  const menuclass = "menu";
  const activeMenuclass = "menu selected";  // Fixed typo here: "manu" to "menu"

  return (
    <div className="menu-container">
      <img className="menuimg" src="logo (1).png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }} 
              to="/"
              onClick={() => handleMenuclick(0)}  // Changed here
            >
              <p className={selectedMenu === 0 ? activeMenuclass : menuclass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuclick(1)}  // Changed here
            >
              <p className={selectedMenu === 1 ? activeMenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuclick(2)}  // Changed here
            >
              <p className={selectedMenu === 2 ? activeMenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuclick(3)}  // Changed here
            >
              <p className={selectedMenu === 3 ? activeMenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuclick(4)}  // Changed here
            >
              <p className={selectedMenu === 4 ? activeMenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuclick(5)}  // Changed here
            >
              <p className={selectedMenu === 5 ? activeMenuclass : menuclass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}
