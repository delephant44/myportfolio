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
            <div className="allIcons">
              <div className="techIcons">
                <img src="/techIcons/react.png" alt="React" title="React" />
                {/* <span className="tooltip">  
                </span> */}
              </div>
              <div className="techIcons">
                <img src="/techIcons/redux.png" alt="Redux" title="Redux" />
              </div>
              <div className="techIcons">
                <img src="/techIcons/html.png" alt="HTML" title="HTML" />
              </div>
              <div className="techIcons-css">
                <img src="/techIcons/css3.png" alt="CSS" title="CSS" />
              </div>
            </div>
          </div>
          <div className="stackType">
            <div className="stackHeader">Back-end</div>
            <div className="allIcons">
              <div className="techIcons">
                <img src="/techIcons/nodejs.png" alt="Node" title="Node" />
              </div>
              <div className="techIcons">
                <img
                  src="/techIcons/express3.png"
                  alt="Express"
                  class="expressLogo"
                  title="Express"
                />
              </div>
              <div className="techIcons">
                <img src="/techIcons/sequelize.png" alt="Sequelize" title="Sequelize"/>
              </div>
              <div className="techIcons">
                <img
                  src="/techIcons/mongodb.png"
                  alt="MongoDB"
                  class="mongoLogo"
                  title="MongoDB"
                />
              </div>
              <div className="techIcons">
                <img src="/techIcons/postgresql.png" alt="PostgreSQL" title="PostgreSQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
