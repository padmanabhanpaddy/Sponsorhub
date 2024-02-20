import React, { useEffect, useState } from "react";
import "../styles/ChatListingPage.css";
import ChatCard from "../components/ChatCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function ChatListingPage() {
  // Get the user email and sponsor email
  const user_email = useSelector((state) => state.users.user_email);
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

  const userId = useSelector((state) => state.users.userId);
  const sponsorId = useSelector((state) => state.sponsors.sponsorId);

  // State to store all the data fetched
  const [chatData, setChatData] = useState([]);

  // Get all the message history
  useEffect(() => {
    // Data to send to the server
    const data = {
      is_user: user_email,
      user_id: userId,
      sponsor_id: sponsorId,
    };

    console.log("Data: ", data)

    // Send a request
    axios
      .post("http://localhost:8000/app/get_chats/", data)
      .then((response) => setChatData(response.data));
  }, [user_email, sponsor_email, userId, sponsorId]);

  return (
    <div>
    <Navbar></Navbar>
      {user_email && chatData.map((chat, index) => (
        
          <Link to={`/chats/${userId}/${chat.id}`}>
            <ChatCard data={chat} key={index}/>
          </Link>
          
        
      ))}


    {!user_email && chatData.map((chat, index) => (
        
        <Link to={`/chats/${chat.id}/${sponsorId}`}>
          <ChatCard data={chat} key={index}/>
        </Link>
        
      
    ))}

    </div>
  );
}
