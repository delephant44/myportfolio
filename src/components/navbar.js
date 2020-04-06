//keep it at top, first item in flex, flex-end

import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="navbarLinks">
            <div>
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

export default NavbarComponent;
