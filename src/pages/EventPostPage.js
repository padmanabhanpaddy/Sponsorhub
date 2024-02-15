import React, { useEffect } from 'react'
import "../styles/EventPostPage.css";
import Navbar from '../components/Navbar';
import ApplyForm from '../components/ApplyForm';

export default function EventPostPage() {
  useEffect(()=>{
    document.title = 'SponsorsHub - Post Your Event';
  },[])
  return (
    <div className='EventPostPageRoot'>

    {/* Navbar */}
    <Navbar></Navbar>

    <ApplyForm />


    </div>
  )
}
