import * as React from "react";

import "./Hero.scss";

export const Hero: React.SFC = () => (
  <div className="hero" style={{ backgroundImage: "../images/hero-bg.jpg" }}>
    <div className="content">
      <h1 className="title">Jose Enoc Martinez Rojas</h1>
      <h2 className="subtitle">Full Stack Web Developer</h2>
      <img className="profile-picture" src={require("../images/profile.jpg")} />
    </div>
  </div>
);
