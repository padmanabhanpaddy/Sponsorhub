import {React, useEffect, useState }from 'react'
import SponsorFundButton from '../components/SponsorFundButton';
import '../styles/SponsorPlans.css';
import {useSelector} from "react-redux";

export default function SponsorPlans(props) {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        console.log(props);
        if (typeof props.data.plans === 'string') {
           
            const decodedPlansString = decodeURIComponent(props.data.plans);    
            
            const decodedPlans = JSON.parse(decodedPlansString);
            console.log("Decoded Plans:", decodedPlans);

            setPlans(decodedPlans);
            console.log(decodedPlans)
           
            
        }
    }, [props.data.plans]);
    






// Load the user/sponsor email from redux state
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

  return (
    <div className='SponsorPlansRoot'>

        <div className='SponsorPlansInfo'>

        <table>
                    <thead>
                        <tr>
                            <th>Plan Name</th>
                            <th>Print Size</th>
                            <th>Print Price</th>
                            {sponsor_email && <th>Fund Events</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map(plan => (
                            <tr key={plan.plan_name}>
                                <td>{plan.plan_name}</td>
                                <td>{plan.print_size}</td>
                                <td>{plan.print_price}</td>
                                {sponsor_email && (
                                    <td><SponsorFundButton amount={plan.print_price} event_id={plan.event_id} /></td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                

        </div>
    </div>
  )
}
