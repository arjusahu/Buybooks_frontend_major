import React from "react";
import { Card, Button } from "react-bootstrap";
import image from "../../../images/gif3.gif";
import Navbar22 from "../../../components/Navbar22";
import Cards from "../../Home/components/Cards";
import Footer from "../../../Footer";

const Aboutus = () => {
  console.log(image);
  return (
    <>
      <Navbar22 />
      <div className="aboutus">
        <Card className="text-center">
          <Card.Header>About us</Card.Header>
          <Card.Body style={{ backgroundColor: "#ccf2f4" }}>
            <Card.Title>
              BookScouter Pro has several powerful features targeted towards
              high-volume users:
            </Card.Title>
            <Card.Text>
              <strong> Deals</strong> <br />
              View pricing information from our buy and sell vendors to identify
              potential deals.
              <br />
              <strong> Bulk Price Lookups</strong>
              <br />
              Look up buyback prices for hundreds or thousands of books on one
              screen. Some limits apply <br />
              <strong> Historical Buyback Price Lookup </strong>
              <br />
              Review the buyback price history for a given ISBN. Identify
              seasonal pricing and trends.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <div className="cards">
          <Cards />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
