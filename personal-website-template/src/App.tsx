// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Optional: Import Education if you make a separate component
// import EducationComponent from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        {/* Optional: Add Education Section */}
        {/* <EducationComponent /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
