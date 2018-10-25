import React from "react";
import serverImg from "../assets/images/servers.jpg";
import computerScienceI from "../assets/images/computer-science.jpg";
import jsImg from "../assets/images/js.jpg";
import frontendImg from "../assets/images/front.jpg";
import cultureImg from "../assets/images/culture.jpg";
import mlImg from "../assets/images/ml.png";

import { Link } from "react-router-dom";
const handleClick = () => {
  console.log("hey");
};
const Home = () => (
  <div className="home">
    <h1>Welcome to your personal Digital Repo</h1>
    <p> Feel free to post and search for tech resources</p>
    <div className="categories">
      ADD Components here
      <div className="parentDiv">
        <a>
          <img src={serverImg} />
          <span className="imgTitle">Servers</span>
        </a>
        <a>
          <img src={computerScienceI} />
          <span className="imgTitle">Comp Sci</span>
        </a>

        <a>
          <img src={frontendImg} />
          <span className="imgTitle">Frontend</span>
        </a>
      </div>
      <div className="parentDiv">
        <a>
          <img src={cultureImg} onClick={handleClick} />
          <span className="imgTitle">Dev Culture</span>
        </a>
        <a>
          <img src={jsImg} />
          <span className="imgTitle">Javascript</span>
        </a>
        <a>
          <img src={mlImg} />
          <span className="imgTitle">Machine Learning</span>
        </a>
      </div>
    </div>

    {/* <div className="topics">
      <button className="childDivs">aaa</button>
      <button className="childDivs">aaa</button>
      <button className="childDivs">aaa</button>
      <button className="childDivs">aaa</button>
      <button className="childDivs">aaa</button>
    </div> */}
  </div>
);

export default Home;
