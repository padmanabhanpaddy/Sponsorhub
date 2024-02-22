import React from "react";
import Navbar from "../components/Navbar";
import Signin from "../components/Signin";
import { useLocation, useNavigate } from "react-router-dom";
import SwitchTabs from "../components/SwitchTabs";

export default function SigninPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath);

  const getClassnameopt1 = () => {
    if (currentPath == "/user_signin") {
      return "selectedCell";
    } else {
      return "";
    }
  };

  const getClassnameopt2 = () => {
    if (currentPath == "/sponsor_signin") {
      return "selectedCell";
    } else {
      return "";
    }
  };
  const classnameopt1 = getClassnameopt1();
  const classnameopt2 = getClassnameopt2();

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      <div className="switchTabs">
        <SwitchTabs
          classnameopt1={classnameopt1}
          classnameopt2={classnameopt2}
          userSignin={() => {
            navigate("/user_signin");
          }}
          sponsorSignin={() => {
            navigate("/sponsor_signin");
          }}
          userActivity={"User Sign in"}
          sponsorActivity={"Sponsor Sign in"}
        />
      </div>

      {/* Signin */}
      <Signin is_user={props.is_user}></Signin>
    </div>
  );
}
