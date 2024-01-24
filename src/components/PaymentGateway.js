import React from 'react';
import axios from 'axios';



export default async function PaymentGateway(paymentInfo) {
    // Function to get the date and convert to razorpay compatable date
    function formatDate(date) {
        const months = [
          "January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"
        ];
      
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
      
        return `${day}-${month}-${year}`;
      }
      

    // Create an order and get the order info
    const data = await axios.post("http://localhost:8000/app/create_order/", {"amount":12000})

    console.log(data); // The response data from the server will be logged here

    // options
    const options = {
        key: 'rzp_test_Mn9ma4Q7usMZHe',
        currency: data.currency,
        amount: paymentInfo.totalCostInPaisa,
        order_id: data.razorpay_order_id,
        
        // Things to do after payment is done
        handler: function async(response) {
            //alert("Payment ID" + response.razorpay_payment_id);
            //alert("Order ID" + response.razorpay_order_id);

            // // Get today's date
            // const today = new Date();
            
            // // Format the date as "27-April-2003"
            // const formattedDate = formatDate(today);

            // // Order data to save
            // const order = {
            //     userID: paymentInfo.userID,
            //     amount: paymentInfo.totalCostInPaisa / 100,
            //     paymentID: response.razorpay_payment_id,
            //     //orderID: response.razorpay_order_id,
            //     //orderPlacedDate:formattedDate,
            // }

            // Send the sponsorship_id of this event as POST request to update the payment status
            axios.post("http://localhost:8000/app/sponsorship_paid/", {"sponsorship_id":paymentInfo.sponsorship_id})
            .then(res => console.log(res))

            // Refresh the page
            window.location.reload();

        },

        prefill:{
            name: "paddy",
            email: "paddy@gmail.com",
            contact:'8291445553'
        }

    };

    // Display the window
    const paymentObject = new window.Razorpay(options)

    paymentObject.open();

  return (
    <div></div>
  )
}
