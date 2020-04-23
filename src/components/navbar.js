import React, { Component } from "react";

export default class NavbarComponent extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="navbarLinks">
            <div className="linkedInIcon">
              <a href="https://www.linkedin.com/in/adeljabbar/">
                {" "}
                <img src="contactIcons/linkedin.png" alt="LinkedIn"></img>{" "}
              </a>
            </div>
            <div>
              <a href="https://github.com/delephant44/">
                {" "}
                <img src="contactIcons/github.png" alt="GitHub"></img>{" "}
              </a>
            </div>
            <div className="emailIcon">
              <a href="mailto:adeljabb@gmail.com">
                <img src="contactIcons/email.png" alt="Email Me"></img>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}