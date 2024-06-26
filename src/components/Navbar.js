import React from "react";
import NavbarLogo from "../assets/navbar-logo.png";
import "../styles/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../store/slices/UserSlice";
import { clearSponsor } from "../store/slices/SponsorSlice";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  // Load the user/sponsor email from redux state
  const user_email = useSelector((state) => state.users.user_email);
  const sponsor_email = useSelector((state) => state.sponsors.sponsor_email);

  // A dispatcher to dispatch an event to the redux global state
  const dispatch = useDispatch();

  // Function to handle the signout
  const handleSignout = () => {
    // Clear the states on logout
    dispatch(clearUser());
    dispatch(clearSponsor());
  };

  return (
    <div className="NavbarRoot">
      {/* Logo Div */}
      <div className="NavbarLogo">
        <div className="NavbarLogoImageBox">
          <img src={NavbarLogo}></img>
        </div>
      </div>

      {/* Options Div */}
      <div className="NavbarOptions">
        {/* List of items */}
        {
          // When user or sponsor signed in show appropriate options
          user_email || sponsor_email ? (
            <ul>
              <Link className="Navoptions" to="/">
                <li>Home</li>
              </Link>
              <Link className="Navoptions" to="/sponsors">
                <li>Sponsors</li>
              </Link>
              <Link className="Navoptions" to="/events">
                <li>Events</li>
              </Link>

              {/* For user show user_event and for sponsors show sponsor applied events */}
              {user_email && (
                <Link className="Navoptions" to="/user_events">
                  <li>Sponsor Status</li>
                </Link>
              )}
              {user_email && (
                <Link className="Navoptions" to="/event_post">
                  <li>Post Event</li>
                </Link>
              )}
              {user_email && (
                <Link className="Navoptions" to="/all_sponsor_chat">
                  <li>Chats</li>
                </Link>
              )}

              {sponsor_email && (
                <Link className="Navoptions" to="/sponsor_events">
                  <li>Sponsor Status</li>
                </Link>
              )}

              {sponsor_email && (
                <Link className="Navoptions" to="/all_user_chat">
                  <li>Chats</li>
                </Link>
              )}

              <Link className="Navoptions" to="/">
                <li onClick={handleSignout}>
                  <FaSignOutAlt />
                </li>
              </Link>
            </ul>
          ) : (
            <ul>
              <Link className="Navoptions" to="/">
                <li>Home</li>
              </Link>
              <Link className="Navoptions" to="/">
                <li>Explore More</li>
              </Link>
              {/* <Link to="/sponsor_signin">
                <li>Sponsor Signin</li>
              </Link>
              <Link to="/sponsor_signup">
                <li>Sponsor Signup</li>
              </Link>
              <Link to="/user_signin">
                <li>User Signin</li>
              </Link>
              <Link to="/user_signup">
                <li>User Signup</li>
              </Link> */}
            </ul>
          )
        }
      </div>
    </div>
  );
}
