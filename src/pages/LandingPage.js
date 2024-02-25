import React from "react";
import LandingBanner from "../components/LandingBanner";
import LandingBlocks from "../components/LandingBlocks";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";
import LandingBlocks2 from "../components/LandingBlocks2";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="LandingPageRoot">
      <Navbar></Navbar>

      <LandingBanner></LandingBanner>

      <div className="LandingBlocksBox">
        <LandingBlocks></LandingBlocks>
      </div>
      <div className="LandingBlocksBox">
        <LandingBlocks2 />
      </div>

      {/* <div className="LandingBlocksBlurBox">
        <LandingBlocksBlur
          cardTitle="Explore Events"
          cardDescription="Explore Some magnificient event!!!"
        />
        <LandingBlocksBlur
          cardTitle="Explore Sponsors"
          cardDescription="See some gigantic Sponsors ready to help and uplift your events"
        />
      </div> */}
      <Footer/>
    </div>
  );
}
