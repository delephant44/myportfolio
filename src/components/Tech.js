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
            <div className="stackHeader">
              Front-end
              {/* <div className="techIcons"> */}
                <img src="/techIcons/react.png" alt="React" />
              {/* </div> */}
              {/* <div className="techIcons"> */}
                <img src="/techIcons/redux.png" alt="Redux" />
              {/* </div> */}
            </div>
            {/* <div className="techIcons">
              <img src="/techIcons/html.png" alt="HTML" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/css.png" alt="CSS" />
            </div> */}
          </div>
          <div className="stackType">
            <div className="stackHeader">Back-end</div>

            <div className="techIcons">
              <img src="/techIcons/nodejs.png" alt="Node" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/express.jpg" alt="Express" />
            </div>
            {/* <div className="techIcons">
              <img src="/techIcons/sequelize.png" alt="Sequelize" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/mongodb.png" alt="MongoDB" />
            </div>
            <div className="techIcons">
              <img src="/techIcons/postgresql.png" alt="PostgreSQL" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
