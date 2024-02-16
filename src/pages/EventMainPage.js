import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import EventMainBanner from "../components/EventMainBanner";
import EventMainDesc from "../components/EventMainDesc";
import SponsorPlans from "../components/SponsorPlans";
import "../styles/EventMainPage.css";
import { useParams } from "react-router-dom";
import MaxWidth from "../components/MaxWidth";

export default function EventMainPage(props) {
  
  // const eventName = props.data.name;
  // console.log(eventName);
  const all_params = useParams();
  // this use effect hook is used to change the title dynamically with the event name written on it.
  useEffect(() => {
    // Get all the params from the url
  const eventName = all_params.name;
    document.title = `SponsorsHub - ${eventName}`;
  }, []);

  const plans = all_params.plans;

  console.log(plans)


  return (
    <div className="EventMainPageRoot">
      {/* Navbar */}
      <Navbar></Navbar>

      <EventMainBanner data={all_params}></EventMainBanner>

      <h2>Event Details</h2>
      <MaxWidth>
        <EventMainDesc data={all_params}></EventMainDesc>
      </MaxWidth>

      <h2>Event Sponsor Plans</h2>
      <SponsorPlans data={all_params}></SponsorPlans>
    </div>
  );
}
