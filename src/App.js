import React from "react";
import "./App.css";
import TechComponent from "./components/Tech";
import IntroComponent from "./components/Intro";
import ProjectsComponent from "./components/Projects";
import HobbiesComponent from "./components/Hobbies";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <IntroComponent />
      <TechComponent />
      <ProjectsComponent />
      <HobbiesComponent />
      <NavbarComponent />
    </div>
  );
}

export default App;


//react - pdf for downloading resumes