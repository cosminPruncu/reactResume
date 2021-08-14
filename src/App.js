import React from "react";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import "./scss/vendors/vendor.scss";
import "./scss/shared/shared.scss";

export default class App extends React.Component {
  render () {
    return (
      <main className="main-page">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    );
  }
}