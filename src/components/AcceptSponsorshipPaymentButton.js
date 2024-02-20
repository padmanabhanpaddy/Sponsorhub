import React from 'react'
import axios from 'axios'


export default function AcceptSponsorshipPaymentButton(props) {

    // Handles accept sponsorbutton click
    const handleAcceptSponsor = async() =>{
        // Data to send
        const data = {
            "sponsorship_id": props.sponsorship.id_x
        }

        console.log(props)

        // Send a post request
        axios.post('http://localhost:8000/app/accept_sponsorship/', data)
        .then(response => console.log(response.data))
    }


  return (
    <div className='AcceptSponsorshipPaymentButtonRoot'>

        <input type='submit' value="Accept Sponsor" onClick={handleAcceptSponsor}></input>
    </div>
  )
}
