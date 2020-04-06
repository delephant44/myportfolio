import React, { Component } from "react";

export default class HobbiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="header">Hobbies & Interests</h1>
        <div className="hobbyIcons">
          <img src="/hobbyIcons/strength.png" alt="bodybuilding" />
          <img src="/hobbyIcons/exercise.png" alt="yoga" />
          <img src="/hobbyIcons/controller.png" alt="gaming" />
          <img src="/hobbyIcons/guitar.png" alt="guitar" />
          <img src="/hobbyIcons/volleyball.png" alt="volleyball" />
          <img src="/hobbyIcons/theater.png" alt="broadway" />
          <img src="/hobbyIcons/world.png" alt="environment" />
        </div>
        <div className="hobbyDescription">
          <p>
            Outside of coding, I spend my time across a few favorite hobbies. I am very physically active, which generally includes bodybuilding, yoga, and volleyball through the Gotham Volleyball organization. I love video games and host game nights with friends regularly. I enjoy bringing good people together! I really like Broadway shows, both plays and musicals. I'm also interested in doing work to better the planet. I'm environmentally conscious and vegan.
          </p>
        </div>
      </div>
    );
  }
}
