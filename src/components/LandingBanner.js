import React from "react";
import mobile from "../assets/mobile.png";
import backgroundGlow from "../assets/landing-banner-background.png";
import "../styles/LandingBanner.css";
import { FaSignInAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingBanner() {
  const navigate = useNavigate();

  const signin = () => {
    navigate("/user_signin");
  };
  
  const signup = () => {
    navigate("/user_signup");
  };
  return (
    <div className="LandingBannerRoot">
      {/* Right Banner */}
      <div className="LandingBannerLeft">
        {/* Container of row divs */}
        <div className="LandingBannerLeftBox">
          {/* First Row div */}
          <div className="LandingBannerLeftFirstRow">
            <h1>3000+ Sponsors In your pocket</h1>
          </div>

          {/* Second Row div */}
          <div className="LandingBannerLeftSecondRow">
            <p>
              Get sponsored on YouTube, Instagram and TikTok. Access a database
              of brands and hotels you can pitch to in seconds.
            </p>
          </div>

          {/* Third Row div */}
          <div className="LandingBannerLeftThirdRow">
            {/* Column 1 button For Sponsors */}
            <button className="LandingBannerLeftButton" onClick={signin}>
              <FaSignInAlt />
              <b>&nbsp;SignIn</b>
            </button>

            {/* Column 2 button For Organizers */}
            <button className="LandingBannerLeftButton" onClick={signup}>
              <FaPlusSquare />
              <b>&nbsp;SignUp</b>
            </button>
          </div>
        </div>
      </div>

      {/* Left Banner */}
      <div className="LandingBannerRight">
        <img src={backgroundGlow} className="backgroundGlow"></img>
        <img src={mobile} className="LandingBannerRightImage"></img>
      </div>
    </div>
  );
}
