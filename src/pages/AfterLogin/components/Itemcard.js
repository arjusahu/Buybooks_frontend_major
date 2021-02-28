import React from "react";
import "../style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Itemcard = ({ items }) => {
  return (
    <div className="carditem col-10 mx-auto">
      <div>
        <img className="itemimg" src={items.src} alt="image" />
      </div>
      <div className="itemdes">
        <h5>{items.title}</h5>
        <p>Author: {items.author}</p>
        <p>Price: {items.price}</p>
        <Link
          to={{
            pathname: "/checkout",
            value: {
              title: items.title,
              price: items.price,
            },
          }}
        >
          <Button variant="outline-primary">Buy</Button>
        </Link>
      </div>
    </div>
  );
};

export default Itemcard;
