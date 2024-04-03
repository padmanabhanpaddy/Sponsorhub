import React from "react";
import "../styles/SwitchTabs.css";
import { useLocation, useNavigate } from "react-router-dom";

const SwitchTabs = (props) => {
  return (
    <div className="Switch">
      <div
        className={`option1 ${props.classnameopt1}`}
        onClick={props.userSignin}
      >
        {props.userActivity}
      </div>
      <div
        className={`option2 ${props.classnameopt2}`}
        onClick={props.sponsorSignin}
      >
        {props.sponsorActivity}
      </div>
    </div>
  );
};

export default SwitchTabs;
