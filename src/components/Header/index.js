import React from "react";

import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we cmelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "red"
  },
  headingStyle: {
    fontSize: 100
  }
};

// We use JSX curly braces to evaluate the style object

function Header(props) {
  const { pages } = props;
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> Welcome to my portfolio, sucker!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {pages.map(({ path, title }) => (
              <Nav.Item key={path}>
                <NavLink className="nav-link" to={path} activeClassName="active">{title}</NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
