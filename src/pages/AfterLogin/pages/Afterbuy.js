import React from "react";
import Navbar22 from "../../../components/Navbar22";
import "../style.css";
import { Button } from "react-bootstrap";

const Afterbuy = (props) => {
  let value = props.location.value || { title: "Programmer", price: "100rs" };
  return (
    <div className="afterbuy">
      <Navbar22 />
      <div className="container">
        <h3
          className="text-center"
          style={{ boxShadow: "2px 2px 5px skyblue" }}
        >
          Thanks! Your order has been placed
        </h3>
        <p>
          <u className="u1">Title:</u> {value.title}
        </p>
        <p>
          <u className="u1">Price:</u> {value.price}
        </p>
        <p>
          <u className="u1"> Description:</u> A Practical Handbook of Software
          Construction The Code Complete book is held dearly among the best
          practical guides on programming. The programming book has no shortage
          of code examples that thoroughly illustrate the art of and science
          behind software development
        </p>
      </div>
    </div>
  );
};

export default Afterbuy;
