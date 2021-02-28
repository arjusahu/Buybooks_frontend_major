import React from "react";
import { Button, Card } from "react-bootstrap";

const CardItem = ({ data }) => {
  console.log(data.src);
  return (
    <>
      <Card style={{ width: "18rem" }} className="cardItem">
        <Card.Img
          variant="top"
          src={data.src}
          style={{ height: "150px", width: "285px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">{data.title}</Card.Title>
          <Card.Text style={{ justifyContent: "justify" }}>
            {data.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
