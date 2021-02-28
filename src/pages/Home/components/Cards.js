import React from "react";
import Card from "./Card";
import { homeData } from "../../data";

const Cards = () => {
  return (
    <>
      {homeData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </>
  );
};

export default Cards;
