import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import SponsorCard from '../components/SponsorCard'
import SearchBar from '../components/SearchBar'
import "../styles/SponsorListingPage.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function SponsorListingPage() {
  
 // Creating state to store response
 const [sponsorData, setSponsorData] = useState([]) 

 const userId = useSelector(state => state.users.userId)


  // Get all the sponsors
  useEffect(() => {

    axios.get('http://localhost:8000/app/sponsors/', {"headers":{"Content-Type":"application/json"}})
    .then(res => {
        console.log(res.data)
        setSponsorData(res.data)
      })
    .catch(err => {
        console.log(err)
      })
  }, [])


    // Log the updated sponsorData
    useEffect(() => {
      console.log(sponsorData);
    }, [sponsorData]);


  return (
    <div>

        {/* Navbar */}
        <Navbar></Navbar>

        {/* Searchbar */}
        <SearchBar></SearchBar>

        {/* Main div encopassinf the left and right div */}
        <div className='SponsorListingPageMain'>
            {/* Left side of page for search and filter */}
            <div className='SponsorListingPageLeft'></div>

            {/* Right side of page for showing events */}
            <div className='SponsorListingPageRight'>
              
              <div className="SponsorListingCardBox">
                {/* Listing all the events */}
                {sponsorData.map(sponsor => (
                  <Link to={`/chats/${userId}/${sponsor.id}`} className='sponsorCardLink'>
                    <SponsorCard
                      key={sponsor.id}
                      address={sponsor.address}
                      contact={sponsor.contact}
                      email={sponsor.email}
                      id={sponsor.id}
                      name={sponsor.name}
                      password={sponsor.password}
                      profile_image={sponsor.profile_image}
                      type={sponsor.type}
                    />
                  </Link>
                ))}

              </div>
              
            </div>
        
        </div>
        
    </div>

  )
}
