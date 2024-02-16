import React from "react";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import SwitchTabs from "../components/SwitchTabs";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignupPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath);

  const getClassnameopt1 = () => {
    if (currentPath == "/user_signup") {
      return "selectedCell";
    } else {
      return "";
    }
  };
  const getClassnameopt2 = () => {
    if (currentPath == "/sponsor_signup") {
      return "selectedCell";
    } else {
      return "";
    }
  };
  const classnameopt1 = getClassnameopt1();
  const classnameopt2 = getClassnameopt2();
  return (
    <div>
      <Navbar></Navbar>
      <div className="switchTabs">
        <SwitchTabs classnameopt1={classnameopt1}
          classnameopt2={classnameopt2}
          userSignin={() => {
            navigate("/user_signup");
          }}
          sponsorSignin={() => {
            navigate("/sponsor_signup");
          }}
          userActivity={"User Sign Up"}
          sponsorActivity={"Sponsor Sign Up"}/>
      </div>
      <Signup is_user={props.is_user}></Signup>:
    </div>
  );
}
