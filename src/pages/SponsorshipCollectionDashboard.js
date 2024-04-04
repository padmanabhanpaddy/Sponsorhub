import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SponsorshipCollectionDashboard() {
  // Get the event id
  const id = useParams("id");

  // Sponsorship data state
  const [sponsorshipData, setSponsorshipData] = useState([]);

  // Fetch all the data for that events
  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/app/get_event_sponsors/",
        { event_id: id.id },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setSponsorshipData(res.data);

        console.log(res.data);
      });
  }, []);

  // Initialize variables for total amount and number of paid collections
  let totalAmountProposed = 0;
  let totalAmount = 0;
  let paidCollections = 0;

  // Iterate over the array and calculate total amount and number of paid collections
  sponsorshipData.forEach((obj) => {
    totalAmountProposed += obj.amount;
    if (obj.sponsor_paid_amount) {
      paidCollections++;
      totalAmount += obj.amount;
    }
  });

  return (
    <div>
      <Navbar />
{/* CSS is  written in App.css */}
      <div className="MainDashboardInterface">
        <div className="StatisticsHeader">
          <h3>Event Statistics Dashboard</h3>
        </div>

        <table>
          <tr>
            <th>No of sponsorships</th>
            <th>No of paid</th>
            <th>Total Collection Proposed</th>
            <th>Total Collected</th>
          </tr>

          <tr>
            <td>{sponsorshipData.length}</td>

            <td>{paidCollections}</td>

            <td>{totalAmountProposed}</td>

            <td>{totalAmount}</td>
          </tr>
        </table>

        <div className="StatisticsHeader">
          <h3>Sponsorship Transaction Table</h3>
        </div>

        <table className="TransactionTable">
          <tr>
            <th>ID</th>
            <th>Sponsor Name</th>
            <th>Type</th>
            <th>Amount Paid</th>
          </tr>

          {sponsorshipData.map((data, idx) => {
            return (
              data.sponsor_paid_amount && (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{data.name}</td>
                  <td>{data.type}</td>
                  <td>{data.amount}</td>
                </tr>
              )
            );
          })}
        </table>
      </div>
    </div>
  );
}
