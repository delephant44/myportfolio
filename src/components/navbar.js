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
            <a href="https://www.linkedin.com/in/adeljabbar/"> LinkedIn </a>
            <a href="https://github.com/delephant44/"> GitHub </a>
            <a href="malto:adeljabb@gmail.com"> Contact Me </a>
        
          </div>
      </div>

    </nav>
    );
  }
}

export default NavbarComponent;
