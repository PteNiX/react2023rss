import React, { Component } from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Page404 from "../pages/Page404";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Form from "../pages/Form";

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        {
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/form" element={<Form />} />
                <Route path="*" element={<Page404 />} />
                <Route index element={<Navigate to="/home" replace />} />
              </Route>
            </Routes>
          </HashRouter>
        }
      </div>
    );
  }
}
