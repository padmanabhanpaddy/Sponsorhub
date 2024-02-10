import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../styles/EventSponsorListingPage.css';
import AcceptSponsorshipPaymentButton from '../components/AcceptSponsorshipPaymentButton';
import AcceptSponsorCard from '../components/AcceptSponsorCard';

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

    

    // Make a post request to get all sponsors of the event
    axios.post('http://localhost:8000/app/get_event_sponsors/', data)
      .then(res => setSponsorshipsAppliesData(res.data));

  } , [id]);


  useEffect(() =>{
    console.log(sponsorshipsAppliesData);
  })

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main div */}
      <div className='EventSponsorListingPageMain'>
        {/* When no data, it means no appications received yet */}
        {!sponsorshipsAppliesData.length && <p>No applications yet</p>}

        {/* When data exists, display the data */}
        {sponsorshipsAppliesData.map(sponsorship => (
          <div key={sponsorship.id}>
            <AcceptSponsorCard
              id={sponsorship.id_x}
              name={sponsorship.name}
              type={sponsorship.type}
              address={sponsorship.address}
              profile_image={sponsorship.profile_image}
              amount={sponsorship.amount}
            />
            <AcceptSponsorshipPaymentButton sponsorship={sponsorship} />
          </div>
        ))}
      </div>
    </div>
  );
}
