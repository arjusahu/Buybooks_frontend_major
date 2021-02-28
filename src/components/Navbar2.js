import React from "react";
import { Nav, Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <Nav className="justify-content-end navbar1" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-1" to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contactus">
            Contact us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-1" to="/aboutus">
            About us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Buy Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Sell books</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-2" to="/login">
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar2;
