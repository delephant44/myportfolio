import React, { Component } from "react";

export default class IntroComponent extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="top">
          <h1 className="name">Adel Jabbar</h1>
          <div className="profilePicContainer">
            <div>
              <img
                src="/profile.jpg"
                alt="Adel Jabbar"
                className="profilePic"
              ></img>
            </div>
          </div>
          <h1 className="title">Full Stack Software Engineer</h1>

          <div className="shortBio">
            <p>
              Hi! I'm a software engineer with a strong history of Client
              Services and Project Management experience.
            </p>
          </div>
        </div>
      </header>
    );
  }
}
