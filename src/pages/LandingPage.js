import React from "react";
import LandingBanner from "../components/LandingBanner";
import LandingBlocks from "../components/LandingBlocks";
import LandingBlocksBlur from "../components/LandingBlocksBlur";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPageRoot">
      <Navbar></Navbar>

      <LandingBanner></LandingBanner>

      <div className="LandingBlocksBox">
        <LandingBlocks></LandingBlocks>
      </div>

      <div className="LandingBlocksBlurBox">
        <LandingBlocksBlur
          cardTitle="Explore Events"
          cardDescription="Explore Some magnificient event!!!"
        />
        <LandingBlocksBlur
          cardTitle="Explore Sponsors"
          cardDescription="See some gigantic Sponsors ready to help and uplift your events"
        />
      </div>
    </div>
  );
}
