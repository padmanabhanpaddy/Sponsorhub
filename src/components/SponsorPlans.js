import React from 'react'
import SponsorFundButton from '../components/SponsorFundButton';
import '../styles/SponsorPlans.css';
import {useSelector} from "react-redux";

export default function SponsorPlans(props) {

// Load the user/sponsor email from redux state
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

  return (
    <div className='SponsorPlansRoot'>

        <div className='SponsorPlansInfo'>

            <table>
                <tr>
                    <th>Plan Name</th>
                    <th>Print Size</th>
                    <th>Print Price</th>
                    {sponsor_email&&<th>Fund Events</th>}
                </tr>

                <tr>
                    <td>Platinum</td>
                    <td>Banner Print</td>
                    <td>10,00,000</td>
                    {sponsor_email&&<td><SponsorFundButton amount={10000} event_id={props.data.id} /></td>}
                </tr>

                <tr>
                    <td>Gold</td>
                    <td>A2</td>
                    <td>1,00,000</td>
                    {sponsor_email&&<td><SponsorFundButton /></td>}
                </tr>

                <tr>
                    <td>Silver</td>
                    <td>A3</td>
                    <td>10,000</td>
                    {sponsor_email&&<td><SponsorFundButton /></td>}
                </tr>

                <tr>
                    <td>Bronze</td>
                    <td>A4</td>
                    <td>5000</td>
                    {sponsor_email&&<td><SponsorFundButton /></td>}
                </tr>
            </table>

        </div>
    </div>
  )
}
