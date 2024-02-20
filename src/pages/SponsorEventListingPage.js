import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import PaymentPortalButton from '../components/PaymentPortalButton';
import '../styles/SponsorEventListingPage.css';
import { useSelector } from 'react-redux';
import PayForEventCard from '../components/PayForEventCard';

export default function SponsorEventListingPage() {
  // State storing the sponsorship data
  const [sponsorshipData, setSponsorshipData] = useState([]);

  // Get the sponsor email
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

  // Data to send to server
  const sponsor_data = { sponsor_email: sponsor_email };

  useEffect(() => {
    // Send a request
    axios.post('http://localhost:8000/app/get_sponsor_events/', sponsor_data)
      .then((response) => setSponsorshipData(response.data));
  }, [sponsor_email]);

  useEffect(() => {
    // Send a request
    console.log(sponsorshipData);
  }, [sponsorshipData]);

  return (
    <div className='SponsorEventListingPageRoot'>
      <Navbar />

      {/* Render PayForEventCard and PaymentPortalButton for each event */}
      {sponsorshipData.map((sponsorship) => (

           
            !sponsorship.sponsor_paid_amount && <div key={sponsorship.id_x}>
            <PayForEventCard
                id={sponsorship.id_x}
                name={sponsorship.name}
                type={sponsorship.type}
                amount={sponsorship.amount}
                address={sponsorship.address}
                min_audience={sponsorship.min_audience}
                max_audience={sponsorship.max_audience}
                start_date={sponsorship.start_date}
                end_date={sponsorship.end_date}
                start_time={sponsorship.start_time}
                end_time={sponsorship.end_time}
                description={sponsorship.description}
                images={sponsorship.images}
                plans={sponsorship.plans}
              />
            <PaymentPortalButton data={sponsorship} />
        </div>

      ))}
    </div>
  );
}
