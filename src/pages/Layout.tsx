import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404">NoPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
