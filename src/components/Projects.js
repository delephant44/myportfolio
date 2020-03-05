import React, { Component } from "react";

export default class ProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <h1 className="header">Projects</h1>
      <div className="allProjects">
        <h1 className="subHeader">FitMinded</h1>
        <div className="projectVideos">
          <iframe
            title="FitMinded"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SAvn2aMWRZE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          A platform for connecting individuals who have similar athletic
          interests. FitMinded allows users to set their athletic preferences
          and location so they can find the perfect training partner. Training
          for a triathlon but need to practice your freestyle? Use FitMinded to
          find other swimmers you can plan workouts with! Love rock-climbing but
          need a belaying buddy? Use FitMinded to find those also passionate in
          the climbing arts! Whatever the experience level or personal
          preference, FitMinded will help fitness enthusiasts connect with
          others.
        </p>
        <h1 className="subHeader">The Egg Shopper</h1>
        <div>
          <img
            src="/projects/eggShopper.png"
            alt="Good Egg Shopper"
            className="projectPhoto"
          />
        </div>
        <p>
          A full stack e-commerce site including user login, shopping cart, and
          product filters. This eggcellent site is a mock shopping app designed
          for users to shop for their favorite kinds of eggs!
        </p>
      </div>
      </div>
    );
  }
}
