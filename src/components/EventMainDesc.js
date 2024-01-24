import React from 'react'
import '../styles/EventMainDesc.css';

export default function EventMainDesc(props) {
  return (
    <div className='EventMainDescRoot'>

        <div className='EventMainInfo'>
            <table>
                <tr>
                    <td>Event Name</td>
                    <td>{props.data.name}</td>
                </tr>

                <tr>
                    <td>Event Location</td>
                    <td>{props.data.address}</td>
                </tr>

                <tr>
                    <td>Minumum Audience</td>
                    <td>{props.data.min_audience}</td>
                </tr>

                <tr>
                    <td>Maximum Audience</td>
                    <td>{props.data.max_audience}</td>
                </tr>

                <tr>
                    <td>Event Type</td>
                    <td>{props.data.type}</td>
                </tr>

                <tr>
                    <td>Tenute</td>
                    <td>3 days</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
