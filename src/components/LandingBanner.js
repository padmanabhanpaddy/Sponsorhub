import React from "react";
import mobile from "../assets/mobile.png";
import backgroundGlow from "../assets/landing-banner-background.png";
import "../styles/LandingBanner.css";
import { FaSignInAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MaxWidth from "./MaxWidth";
import { useSelector } from "react-redux";

export default function LandingBanner() {
  // Load the user/sponsor email from redux state
  const user_email = useSelector((state) => state.users.user_email);
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);
  const navigate = useNavigate();

  const signin = () => {
    navigate("/user_signin");
  };

  const signup = () => {
    navigate("/user_signup");
  };
  return (
    <MaxWidth>
      <div className="LandingBannerRoot">
        {/* Right Banner */}
        <div className="LandingBannerLeft">
          {/* Container of row divs */}
          <div className="LandingBannerLeftBox">
            {/* First Row div */}
            {user_email || sponsor_email ? (
              <>
                <div className="LandingBannerLeftFirstRow">
                  <h1>3000+ Sponsors In your pocket</h1>
                </div>

                {/* Second Row div */}
                <div className="LandingBannerLeftSecondRow">
                  <p>
                    Get sponsored on YouTube, Instagram and TikTok. Access a
                    database of brands and hotels you can pitch to in seconds.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="LandingBannerLeftFirstRow">
                  <h1>
                    Explore Variuos Events and Sponsors on one single platform
                  </h1>
                </div>
                {/* Second Row div */}
                <div className="LandingBannerLeftSecondRow">
                  <p>
                    A platform with two way profitability letting sponsors and
                    event managers comunicate directly without any middle men
                  </p>
                </div>
              </>
            )}

            {/* Third Row div */}
            <div className="LandingBannerLeftThirdRow">
              {user_email || sponsor_email ? (
                <>
                  <button
                    className="LandingBannerLeftButton"
                    onClick={() => {
                      navigate("/sponsors");
                    }}
                  >
                    <b>Explore Sponsors</b>
                  </button>
                  <button
                    className="LandingBannerLeftButton"
                    onClick={() => {
                      navigate("/events");
                    }}
                  >
                    <b>Explore Events</b>
                  </button>
                </>
              ) : (
                <>
                  <button className="LandingBannerLeftButton" onClick={signin}>
                    <FaSignInAlt />
                    <b>&nbsp;SignIn</b>
                  </button>
                  <button className="LandingBannerLeftButton" onClick={signup}>
                    <FaPlusSquare />
                    <b>&nbsp;SignUp</b>
                  </button>
                </>
              )}
              {/* Column 1 button For Sponsors */}

              {/* Column 2 button For Organizers */}
            </div>
          </div>
        </div>

        {/* Left Banner */}
        <div className="LandingBannerRight">
          <img src={backgroundGlow} className="backgroundGlow"></img>
          <img src={mobile} className="LandingBannerRightImage"></img>
        </div>
      </div>
    </MaxWidth>
  );
}
