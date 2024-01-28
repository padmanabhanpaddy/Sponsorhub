import React from "react";
import blur_logo from "../assets/blur-logo.svg";
import "../styles/LandingBlocksBlur.css";

export default function LandingBlocksBlur(props) {
  return (
    <div className="LandingBlocksBlurRoot">
      <div className="LandingBlocksBlurLogo">
        <img src={blur_logo}></img>
      </div>

      <div className="LandingBlocksBlurTitle">
        <h2>{props.cardTitle}</h2>
      </div>

      <div className="LandingBlocksBlurDesc">
        <p>{props.cardDescription}</p>
      </div>
    </div>
  );
}
