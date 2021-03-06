import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>ML x React = 🔥</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link eventKey="disabled" disabled>
            predict my salary
          </Nav.Link>
        </Link>
        <Link to="/admissionpage">
          <Nav.Link eventKey="disabled" disabled>
            Predict my admission
          </Nav.Link>
        </Link>
        <Link to="/textpage">
          <Nav.Link eventKey="disabled" disabled>
            predict my text
          </Nav.Link>
        </Link>
        <Link to="/wordcountpage">
          <Nav.Link eventKey="disabled" disabled>
            count words based on url
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
