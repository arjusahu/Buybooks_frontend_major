import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

const Accordian = ({ item }) => {
  return (
    <div className="accordion">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="0"
              className="accotitle"
            >
              <>{item.title}</>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{item.text}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Accordian;
