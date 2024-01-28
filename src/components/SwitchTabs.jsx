import React from "react";
import "../styles/SwitchTabs.css";
import { useLocation, useNavigate } from "react-router-dom";

const SwitchTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath);

  const getClassnameopt1 =()=>{
    if (currentPath=="/user_signin") {
      return "selectedCell"
    }else {
      return ""
    }
  }
  const getClassnameopt2 =()=>{
    if (currentPath=="/sponsor_signin") {
      return "selectedCell"
    }else {
      return ""
    }
  }
  const classnameopt1 = getClassnameopt1()
  const classnameopt2 = getClassnameopt2()
  return (
    <div className="Switch">
      <div className={`option1 ${classnameopt1}`} onClick={()=>{navigate("/user_signin")}}>User Sign In</div>
      <div className={`option2 ${classnameopt2}`} onClick={()=>{navigate("/sponsor_signin")}}>Sponsor Sign In</div>
    </div>
  );
};

export default SwitchTabs;
