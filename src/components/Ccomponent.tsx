import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "../pages/Page404";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        {
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        }
      </div>
    );
  }
}
