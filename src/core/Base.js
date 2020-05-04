import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";

const Base = ({ children }) => {
  return (
    <div>
      <Menu></Menu>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Base;
