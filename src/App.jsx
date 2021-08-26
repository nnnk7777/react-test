import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Top } from "./pages/Top";

export const App = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-gray-700 duration-300 w-full"
        style={{ minHeight: "calc(100vh - 8rem)" }}
      >
        <Top />
      </div>

      <Footer />
    </div>
  );
};
