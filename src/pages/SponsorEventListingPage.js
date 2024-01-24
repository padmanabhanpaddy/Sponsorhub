import { React, useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import PaymentPortalButton from '../components/PaymentPortalButton';
import '../styles/SponsorEventListingPage.css';
import { useSelector } from "react-redux";


export default function SponsorEventListingPage() {

    // State storing the sponsorship data
    const [sponsorshipData, setSponsorshipData] = useState([]);

    // Get the sponsor email
    const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

    // Data to send to server
    const sponsor_data = {"sponsor_email":sponsor_email}


    useEffect(() => {
        // Send a request
        axios.post('http://localhost:8000/app/get_sponsor_events/', sponsor_data)
            //.then((response) => console.log(response.data))
            .then((response) => setSponsorshipData(response.data))
    }, [sponsor_email])


    useEffect(() => {
      // Send a request
      console.log(sponsorshipData)
  }, [sponsorshipData])


  return (
    <div className='SponsorEventListingPageRoot'>

        <Navbar></Navbar>

        {sponsorshipData.map(data =>(
          // If not paid show payment button(else show something else)
           !data.sponsor_paid_amount&&<PaymentPortalButton data={data} />
          
        ))}
    
    </div>
  )
}
