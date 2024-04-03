import React, { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import "../styles/ChatPage.css";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/ChatPage.css'

export default function ChatPage() {
    // Get sponsor id
    const { sponsorId, userId } = useParams();

  return (
    <>
    {/* <Navbar/> */}
    <div className='ChatPageRoot'>
        <ChatWindow sponsorId={sponsorId} userId={userId}/>
    </div>
    </>
  );
}
