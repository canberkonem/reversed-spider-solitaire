import React from "react";
import BackHomeButton from "../../Components/BackHomeButton/BackHomeButton";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";
import "./HowToPlay.css";
import howtofirstgif from "../../Assets/gif/howtofirstgif.gif";
import howtosecondgif from "../../Assets/gif/howtosecondgif.gif";
import howtothirdgif from "../../Assets/gif/howtothirdgif.gif";
import howtofourthgif from "../../Assets/gif/howtofourthgif.gif";
import howtofifthgif from "../../Assets/gif/howtofifthgif.gif";

export default function HowToPlay() {
  return (
    <HomePageLayout>
      <div className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div className="slides">
          <div id="slide-1">
            <img src={howtofirstgif} alt="first step" />
          </div>
          <div id="slide-2">
            <img src={howtosecondgif} alt="second step" />
          </div>
          <div id="slide-3">
            <img src={howtothirdgif} alt="third step" />
          </div>
          <div id="slide-4">
            <img src={howtofourthgif} alt="fourth step" />
          </div>
          <div id="slide-5">
            <img src={howtofifthgif} alt="fifth step" />
          </div>
        </div>
      </div>
      <BackHomeButton />
    </HomePageLayout>
  );
}
