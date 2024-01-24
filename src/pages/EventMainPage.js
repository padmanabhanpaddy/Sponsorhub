import React from 'react'
import Navbar from '../components/Navbar'
import EventMainBanner from '../components/EventMainBanner'
import EventMainDesc from '../components/EventMainDesc';
import SponsorPlans from '../components/SponsorPlans';
import '../styles/EventMainPage.css';
import {useParams} from 'react-router-dom'

export default function EventMainPage() {

  // Get all the params from the url
  const all_params = useParams();

  return (
    <div className='EventMainPageRoot'>
        {/* Navbar */}
        <Navbar></Navbar>

          <EventMainBanner data={all_params} ></EventMainBanner>

          <h2>Event Details</h2>
          <EventMainDesc data={all_params}></EventMainDesc>

          <h2>Event Sponsor Plans</h2>
          <SponsorPlans data={all_params}></SponsorPlans>
        
 

    </div>
  )
}
