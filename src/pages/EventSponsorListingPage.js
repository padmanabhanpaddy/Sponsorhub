import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import axios from "axios";
import "../styles/EventSponsorListingPage.css";
import AcceptSponsorshipPaymentButton from '../components/AcceptSponsorshipPaymentButton';

export default function EventSponsorListingPage() {

    // Get the event id
    const event_id = useParams("id");

    // State to store the sponsorships applies data
    const [sponsorshipsAppliesData, setSponsorshipsAppliesData] = useState([]);

    useEffect(() =>{
        // Data to pass for post request
        const data = {
            "event_id": event_id.id
        }

        // Make a post request to get all sponsors of the event
        axios.post("http://localhost:8000/app/get_event_sponsors/", data)
        .then(res => setSponsorshipsAppliesData(res.data))

    }, [])


      useEffect(() =>{
          console.log(sponsorshipsAppliesData)
      }, [sponsorshipsAppliesData])

  return (
    <div>
        
        {/* Navbar */}
        <Navbar></Navbar>

        {/* Main div */}
        <div className='EventSponsorListingPageMain'>

        {/* When no data, it means no appications received yet */}
        {!sponsorshipsAppliesData.length&&<p>No applications yet</p>}


        {/* When data exists, dispay the data */}
        {sponsorshipsAppliesData.map(sponsorship =>(
          <AcceptSponsorshipPaymentButton sponsorship={sponsorship} />
        ))}

        </div>
    </div>
  )
}
