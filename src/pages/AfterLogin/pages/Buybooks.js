import React, { useState } from "react";
import Itemcard from "../components/Itemcard";
import { item } from "../../data";
import Navbar22 from "../../../components/Navbar22";
import "../style.css";
import Filterlist from "../components/Filterlist";

const Buybooks = () => {
  const [list, setList] = useState(item);
  return (
    <div className="buybooks">
      <Navbar22 />
      {/* <Filterlist /> */}
      {list.map((itm, index) => (
        <Itemcard items={itm} key={index} />
      ))}
    </div>
  );
};

export default Buybooks;
