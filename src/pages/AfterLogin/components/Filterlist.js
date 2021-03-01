import React from "react";

const Filterlist = ({ setList, origi }) => {
  let hadleCom = () => {
    let li = origi.filter((item) => item.sub === "computer");
    setList(li);
  };
  let hadleMath = () => {
    let li = origi.filter((item) => item.sub === "maths");
    setList(li);
  };
  let hadlePhy = () => {
    let li = origi.filter((item) => item.sub === "physics");
    setList(li);
  };
  let hadleChe = () => {
    let li = origi.filter((item) => item.sub === "chemistry");
    setList(li);
  };
  return (
    <div className="filter">
      <p onClick={hadleCom}>Computer Science</p>
      <p onClick={hadleMath}>Maths</p>
      <p onClick={hadlePhy}>Physics</p>
      <p onClick={hadleChe}>Chemistry</p>
    </div>
  );
};

export default Filterlist;
