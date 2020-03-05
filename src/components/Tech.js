import React, { Component } from "react";

export default class TechComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="techSection">
        <div>
          <h2 className="header">Technologies I've worked with:</h2>
        </div>
        <div className="allSkills">
          <div className="stackType">
            <div className="stackHeader">Front-end</div>
            <div></div>
            <div className="techIcons">
              <img src="/techIcons/react.png" alt="React" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/redux.png" alt="Redux" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/html.png" alt="HTML" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/css.png" alt="CSS" />
            </div>
          </div>
          <div className="stackType">
            Back-end
            <div className="techIcons">
              <img src="/techIcons/nodejs.png" alt="Node" />
              <img src="/techIcons/express.jpg" alt="Express" />
              <img src="/techIcons/sequelize.png" alt="Sequelize" />
              <img src="/techIcons/mongodb.png" alt="MongoDB" />
              <img src="/techIcons/postgresql.png" alt="PostgreSQL" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
