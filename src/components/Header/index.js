import React from "react";

import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from "react-bootstrap";

import "./header.css";


function Header(props) {
  const { pages } = props;
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="header" >Max William Edmonds Developer Portfolio</Navbar.Brand>
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
