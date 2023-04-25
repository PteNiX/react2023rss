import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
export const Layout = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-con">
          <span>
            <Link to="/home">Home</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
          <span>
            <Link to="/404">NoPage</Link>
          </span>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
