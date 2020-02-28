import React, { Component } from "react";

export default class IntroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="App-header">
        <div className="top">
          <h1 className="header">Adel Jabbar</h1>
          <div>
            <img
              src="/profile.jpg"
              alt="Adel Jabbar"
              className="profilePic"
            ></img>
          </div>
          <h3 className="title">Full Stack Software Engineer</h3>

          <div className="shortBio">
            <p>
              With over 4 years of ad tech experience, I'm a Full Stack Software
              Engineer with a strong history of Client Services and Project
              Management experience in the tech industry. I love: [insert
              hobbies here]
            </p>
          </div>
        </div>
      </header>
    );
  }
}
