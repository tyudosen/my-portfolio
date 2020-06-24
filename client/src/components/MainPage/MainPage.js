import React from "react";
import "./MainPage.css";
import Footer from "../Footer/Footer";
import { Grid, Cell } from "react-mdl";

const MainPage = () => (
  <div>
    <div className="banner">
      <div className="text-banner">
        <h2>Full Stack Developer</h2>
        <hr />
        <p>JavaScript | NodeJs | React | HTML/CSS | Express | MongoDB</p>

        <div className="social-links">
          <a
            href="http://linkedin.com/in/toyoudosen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/tyudosen?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="img">
        <img className="avatar-one" src="/img/avatar.png" alt="avatar" />
      </div>
    </div>
    <Footer />
  </div>
);

export default MainPage;
