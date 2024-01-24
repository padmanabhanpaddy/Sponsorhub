import {React, useState} from 'react'
import '../styles/ApplyForm.css';
import axios from 'axios';
import { useSelector } from "react-redux";

export default function ApplyForm() {

    // States to save the details
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [min_audience, setMinAudience] = useState("");
    const [max_audience, setMaxAudience] = useState("");
    const [start_date, setStartDate] = useState();
    const [end_date, setEndDate] = useState();
    const [start_time, setStartTime] = useState();
    const [end_time, setEndTime] = useState();
    const [description, setDescription] = useState("");
    const [images, setImages] = useState();
    const [quotationfile, setQuotationfile] = useState([]);

    // Get the email of the user
    const email = useSelector(state => state.users.user_email)

    // On submit handler
    const handleSubmit = async() =>{
        // Data to send
        const data = {
            "user_email": email,
            "name": name,
            "type": type,
            "address": location,
            "min_audience": min_audience,
            "max_audience": max_audience,
            "start_date": start_date,
            "end_date": end_date,
            "start_time": start_time,
            "end_time": end_time,
            "description": description,
            "images": images,
            "quotation_file": quotationfile
        }

        console.log(data);

        

        // Send a post request to save this event
        axios.post("http://localhost:8000/app/save_event/", data, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((response) =>{console.log(response)})
        .catch((err) =>{console.log(err)});


    }


  return (
    <div className='ApplyFormRoot'>

        <table>
            <tr>
                <td>Event Name:</td>
                <td><input type='text' name='name' onChange={(event)=> setName(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Event Type:</td>
                <td><input type='text' name='type' onChange={(event)=> setType(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Event Address:</td>
                <td><input type='text' name='location' onChange={(event)=> setLocation(event.target.value)}></input></td>
            </tr>


            <tr>
                <td>Min Audience:</td>
                <td><input type='text' name='min_audience' onChange={(event)=> setMinAudience(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Max Audience:</td>
                <td><input type='text' name='max_audience' onChange={(event)=> setMaxAudience(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Start Date:</td>
                <td><input type='date' name='start_date' onChange={(event)=> setStartDate(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>End Date:</td>
                <td><input type='date' name='end_date' onChange={(event)=> setEndDate(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Start Time:</td>
                <td><input type='time' name='start_time' onChange={(event)=> setStartTime(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>End Time:</td>
                <td><input type='time' name='end_time' onChange={(event)=> setEndTime(event.target.value)}></input></td>
            </tr>

            <tr>
                <td>Event Description:</td>
                <td><textarea id="big-text" name="description" rows="4" cols="50" onChange={(event)=> setDescription(event.target.value)}></textarea></td>
            </tr>

            <tr>
                <td>Event Images: </td>
                <td><input type='file' name='event_images' accept='image/*' multiple onChange={(event)=> setImages(Array.from(event.target.files))}></input></td>
            </tr>
            

            <tr>
                <td>Quotation File: </td>
                <td><input type='file' name='quotation_file' accept=".pdf" onChange={(event)=> setQuotationfile(event.target.files)}></input></td>
            </tr>

            

            <tr>
                <td><input type='Submit' onClick={handleSubmit}></input></td>
            </tr>
        </table>
        
    </div>
  )
}
