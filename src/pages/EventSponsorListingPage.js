import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../styles/EventSponsorListingPage.css";
import AcceptSponsorshipPaymentButton from "../components/AcceptSponsorshipPaymentButton";
import AcceptSponsorCard from "../components/AcceptSponsorCard";
import { Link } from "react-router-dom";

export default function EventSponsorListingPage() {
  // Get the event id
  const { id } = useParams();

  // State to store the sponsorships applies data
  const [sponsorshipsAppliesData, setSponsorshipsAppliesData] = useState([]);

  useEffect(() => {
    // Data to pass for post request
    const data = {
      event_id: id,
    };

    try {
      // Make a post request to get all sponsors of the event
      axios
        .post("http://localhost:8000/app/get_event_sponsors/", data)
        .then((res) => setSponsorshipsAppliesData(res.data));
    } catch {
      setSponsorshipsAppliesData([]);
    }
  }, [id]);

  useEffect(() => {
    console.log(sponsorshipsAppliesData);
  });

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main div */}
      <div className="EventSponsorListingPageMain">
        {/* When data exists, display the data */}
        {sponsorshipsAppliesData.length ? (
          sponsorshipsAppliesData.map((sponsorship) => (
            <div key={sponsorship.id}>
              {sponsorship.user_accepted_request &&
              !sponsorship.sponsor_paid_amount ? (
                <div className="EventAcceptSponsorRoot">
                  <AcceptSponsorCard
                    id={sponsorship.id_x}
                    name={sponsorship.name}
                    type={sponsorship.type}
                    address={sponsorship.address}
                    profile_image={sponsorship.profile_image}
                    amount={sponsorship.amount}
                  />
                  <p className="SponsorStatusText">Request Accepted, Wait For Sponsor to pay</p>
                </div>
              ) : (
                <div className="EventAcceptSponsorRoot">
                  <AcceptSponsorCard
                    id={sponsorship.id_x}
                    name={sponsorship.name}
                    type={sponsorship.type}
                    address={sponsorship.address}
                    profile_image={sponsorship.profile_image}
                    amount={sponsorship.amount}
                  />
                  {sponsorship.sponsor_paid_amount ? (
                    <p className="SponsorStatusText">Sponsor Has Paid</p>
                  ) : (
                    <AcceptSponsorshipPaymentButton sponsorship={sponsorship} />
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No applications yet</p>
        )}
      </div>

      {/* A button to show stats */}
      <Link to={`dashboard`}>
        <div >
          <button className="EventCollectionContainer">Show Event Collection Details</button>
        </div>
      </Link>
    </div>
  );
}
