import React from "react";
import Itemcard from "../components/Itemcard";
import { item } from "../../data";
import Navbar22 from "../../../components/Navbar22";
import "../style.css";

const Buybooks = () => {
  //   console.log(item);
  return (
    <div className="buybooks">
      <Navbar22 />
      {item.map((itm, index) => (
        <Itemcard items={itm} key={index} />
      ))}
    </div>
  );
};

export default Buybooks;
