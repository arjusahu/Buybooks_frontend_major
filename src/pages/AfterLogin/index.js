import React from "react";
import Navbar22 from "../../components/Navbar22";
import Accordian from "./components/Accordian";
import "./style.css";
import { que } from "../data";
import Buybooks from "./pages/Buybooks";

const Afterlogin = () => {
  return (
    <>
      <Navbar22 />
      <Buybooks />
    </>
  );
};

export default Afterlogin;
