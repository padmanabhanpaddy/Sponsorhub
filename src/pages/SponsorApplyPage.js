import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/SponsorApplyPage.css"
import ApplyForm from '../components/ApplyForm'
import brand_logo from "../assets/brand_logo.jpg"

export default function SponsorApplyPage() {
  return (
    <div className='SponsorApplyPageRoot'>

        {/* Navbar */}
        <Navbar></Navbar>

        <div className='SponsorApplyPageMain'>

            {/* Upper Logo */}
            <div className='SponsorApplyPageLogo'><img src={brand_logo}></img></div>
            

            {/* Lower Form */}
            <div className='SponsorApplyPageForm'><ApplyForm></ApplyForm></div>
            
        </div>


        



    </div>
  )
}
