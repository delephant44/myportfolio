import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TechComponent from "./components/Tech";
import IntroComponent from "./components/Intro";
import ProjectsComponent from "./components/Projects";
import HobbiesComponent from "./components/hobbies";

function App() {
  return (
    <div className="App">
      <IntroComponent />
      <TechComponent />
      <ProjectsComponent />
      <HobbiesComponent />
    </div>
  );
}

export default App;
