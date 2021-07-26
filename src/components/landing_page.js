import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import logo from "./logo.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= {logo}
              alt="avatar"
              className="avatar-img"
            ></img>
            <div className="banner-text">
              <h1 style = {{fontFamily : 'sans-serif'}}>Full Stack Web Developer</h1>
              <hr />
              <p style = {{fontFamily : 'sans-serif'}}>
                JAVA | SpringBoot | Microservices| React JS| Angular | SQL |
                MongoDB | AWS
              </p>
              <div className="social-links">
                  <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                  </a>
               </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
