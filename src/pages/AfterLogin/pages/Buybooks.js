import React, { useState } from "react";
import Itemcard from "../components/Itemcard";
import { item } from "../../data";
import Navbar22 from "../../../components/Navbar22";
import "../style.css";
import Filterlist from "../components/Filterlist";

const Buybooks = () => {
  const [list, setList] = useState(item);
  const [origi, setOrigi] = useState(item);
  return (
    <div className="buybooks">
      <Navbar22 />
      <Filterlist setList={setList} origi={origi} />
      <div className="cardgroup">
        {list.map((itm, index) => (
          <Itemcard items={itm} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Buybooks;
