import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  const pages = [
    { path: "/", title: "Home", page: <AboutMe /> },
    { path: "/aboutme", title: "About Me", page: <AboutMe /> },
    { path: "/projects", title: "Projects", page: <Projects /> },
    { path: "/contact", title: "Contact", page: <Contact /> },
    { path: "/resume", title: "Resume", page: <Resume /> }
  ];
  return (
    <>
      <div className="content">
        <Header pages={pages} />
        <Switch>
          {pages.map(({ path, page }) => (<Route exact path={path} key={path}>{page}</Route>))}
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
