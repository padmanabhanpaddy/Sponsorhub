import React, { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import "../styles/ChatPage.css";
import { useParams } from 'react-router-dom';

export default function ChatPage() {
    // Get sponsor id
    const { sponsorId, userId } = useParams();

  return (
    <div className='ChatPageRoot'>
        <ChatWindow sponsorId={sponsorId} userId={userId}/>
    </div>
  );
}
