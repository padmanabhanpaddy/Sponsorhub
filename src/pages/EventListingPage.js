import {React, useEffect, useState} from 'react'
import '../styles/EventListingPage.css';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function EventListingPage() {

  // State to store events data
  const [eventsData, setEventsData] = useState([]);


  useEffect(() => {
    // Make an api request
    axios.get("http://localhost:8000/app/events/")
    .then(res => {
        console.log(res.data)
        setEventsData(res.data)
      })
    .catch(err => {
      console.log(err)
    });

  },[])


  useEffect(() => {console.log(eventsData)}, [eventsData])

  return (
    <div className='EventListingPageRoot'>

        {/* navbar */}
        <Navbar></Navbar>

        {/* Search bar */}
        <SearchBar></SearchBar>

        {/* Main div encopassinf the left and right div */}
        <div className='EventListingPageMain'>
            {/* Left side of page for search and filter */}
            <div className='EventListingPageLeft'></div>

            {/* Right side of page for showing events */}
            <div className='EventListingPageRight'>

                {/* Listing all the events */}
                <div className='EventListingCardBox'>
                  {eventsData.map(event =>{
                    // Encode the image url
                    const imageUrl = encodeURIComponent(event.images[0].image);

                    return(
                      <Link to={`/events/${event.id}/${event.name}/${event.type}/${event.address}/${event.min_audience}/${event.max_audience}/${event.start_date}/${event.end_date}/${event.start_time}/${event.end_time}/${event.description}/${imageUrl}`}>
                        <EventCard
                          id={event.id}
                          key={event.id}
                          name={event.name}
                          type={event.type}
                          address={event.address}
                          min_audience={event.min_audience}
                          max_audience={event.max_audience}
                          start_date={event.start_date}
                          end_date={event.end_date}
                          start_time={event.start_time}
                          end_time={event.end_time}
                          description={event.description}
                          images={event.images}
                        ></EventCard>
                      </Link>
                  )})}
                    
                </div>
            </div>
        </div>

        

       
    </div>
  )
}
