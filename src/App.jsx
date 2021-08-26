import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <Router>
      <Header />
      <div
        className="bg-gray-700 duration-300 w-full"
        style={{ minHeight: "calc(100vh - 8rem)" }}
      >
        <Routes />
        {/* <Route component={NoMatch} /> */}
      </div>
      <Footer />
    </Router>
  );
};
