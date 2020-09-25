import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router>
<Header>
<Link to="/resume">Resume</Link>
<Link to="/aboutme">About Me</Link>
<Link to="/projects">Projects</Link>
<Link to="/contact">Contact</Link>

</Header>


      <div>
        <Nav />
        <Switch>
          <Route />

         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
