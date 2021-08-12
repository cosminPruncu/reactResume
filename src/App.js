import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import "./scss/shared/shared.scss";
import "./scss/vendors/vendor.scss";

export default class App extends React.Component {
  render () {
    return (
      <main className="main-page">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    );
  }
}