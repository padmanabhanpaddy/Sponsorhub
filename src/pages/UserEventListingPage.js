import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import "../styles/UserEventListingPage.css"
import axios from "axios";
import { useSelector } from "react-redux";

export default function UserEventListingPage() {
  // State to store the user events via api
  const [userEvents, setUserEvents] = useState([])

  // Get data to send to server
  const user_email = useSelector((state) => state.users.user_email);

  // Data to send
  const user_data = {"user_email":user_email}

  // Use effect to get the data from the server
  useEffect(() => {
    // Send to server
    axios.post('http://localhost:8000/app/get_user_events/', user_data)
    .then(response => setUserEvents(response.data))
  }, [user_email])


  // For logging data
  useEffect(() => {
      console.log(userEvents)

  }, [userEvents])




  return (
    <div className='UserEventListingPageRoot'>
        <Navbar></Navbar>


        <div className='UserEventListingPageMain'>

          {userEvents.map(event =>(
              <Link to={`/user_events/${event.id}`}>
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
              ))}
            
        </div>


       


    </div>
  )
}
