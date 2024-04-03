import React from 'react'
import "../styles/SponsorFundButton.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function SponsorFundButton(props) {

    const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

    // Handle applying sponsorship funding
    const handleSponsorshipFund = async() =>{

      try{
        // Data to send
        const data = {"sponsor_email":sponsor_email,
                      "event_id": props.event_id,
                      "amount": props.amount
        }

        // Post request
        axios.post("http://localhost:8000/app/apply_sponsorship/", data)
        .then(res => console.log(res));
      }
      catch(err){
        console.log(err);
      }
       
        
    }

  return (
    <div>
        <input className='planSelectioButton' type='submit' value='Fund Event' onClick={handleSponsorshipFund} ></input>
    </div>
  )
}
