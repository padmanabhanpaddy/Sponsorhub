import React from 'react'
import "../styles/EventPostPage.css";
import Navbar from '../components/Navbar';
import ApplyForm from '../components/ApplyForm';

export default function EventPostPage() {
  return (
    <div className='EventPostPageRoot'>

    {/* Navbar */}
    <Navbar></Navbar>

    <ApplyForm />


    </div>
  )
}
