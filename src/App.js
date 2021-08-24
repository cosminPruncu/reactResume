import React from "react";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./scss/vendors/vendor.scss";
import "./scss/shared/shared.scss";

export default class App extends React.Component {
  render () {
    return (
      <main className="main-page">
        <BrowserRouter>
          <Navbar />
          <Hero />
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Switch>
          <Contact />
        </BrowserRouter>
      </main>
    );
  }
}