import { React, useEffect } from 'react'
import '../styles/PaymentPortalButton.css'
import PaymentGateway from './PaymentGateway' 

export default function PaymentPortalButton(props) {

    const { data } = props;

    // A function which loads the payment gateway script to the page
    function loadScript(src) {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
              resolve(true);
          };
          script.onerror = () => {
              resolve(false);
          };
          document.body.appendChild(script);
      });
}

    
    // Load the script on loading the page
    useEffect(() => {
        async function initializeRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
        }
        }

        
        initializeRazorpay();
    }, []);


    // total cost will be toggled using props supiled to this button
    const paymentInfo = {
        "totalCostInPaisa":data.amount * 100,
        "sponsorship_id":data.id_x
    }

  return (
            <div className="PaymentPortalButtonRoot">
                {/* Holds the Pay button */}
                <input type="submit" value="Pay for event" onClick={() => PaymentGateway(paymentInfo)}></input>

            </div>
  )
}
