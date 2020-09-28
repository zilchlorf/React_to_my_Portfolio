import React from "react";

function Nav(props) {
  const { children } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      {children}
    </nav>
  );
}

export default Nav;
