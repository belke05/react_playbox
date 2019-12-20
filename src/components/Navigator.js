import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <Navbar bg="secondary" variant="dark">
      <Navbar.Brand href="#home">ML x React = 🔥</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <Link to="/">predict my salary</Link>
        </Nav.Link>
        <Nav.Link href="#features">
          <Link to="/admissionpage">Predict my admission</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
