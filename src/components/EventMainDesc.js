import React from 'react'
import '../styles/EventMainDesc.css';

export default function EventMainDesc(props) {
  return (
    <div className='EventMainDescRoot'>

        <div className='EventMainInfo'>
            <table>
                <tr>
                    <th>Event Name</th>
                    <td>{props.data.name}</td>
                </tr>

                <tr>
                    <th>Event Location</th>
                    <td>{props.data.address}</td>
                </tr>

                <tr>
                    <th>Minumum Audience</th>
                    <td>{props.data.min_audience}</td>
                </tr>

                <tr>
                    <th>Maximum Audience</th>
                    <td>{props.data.max_audience}</td>
                </tr>

                <tr>
                    <th>Event Type</th>
                    <td>{props.data.type}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
