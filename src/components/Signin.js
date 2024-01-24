import React,{useState} from "react";
import "../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../store/slices/UserSlice";
import { addSponsor } from "../store/slices/SponsorSlice";
import { useDispatch } from "react-redux";


export default function Signin(props) {

  // States to handle authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // For navigation purpose
  const navigate = useNavigate();

  // Used to dispatch the data to redux
  const dispatch = useDispatch();

  // Function handling login, saving email in redux state
  const login = async() =>{

    axios.post("http://localhost:8000/app/post_signin/", {
    email: email,
    password: password,
    is_user:props.is_user
    }).then((response) =>{
      // Log the user data
      console.log(response);

      // If user signin send to user state else sponsor state
      if(props.is_user){
        dispatch(addUser(response.data.email));
      }else{
        dispatch(addSponsor(response.data.email));
        console.log("Sponsor added")
      }

      // Navigate to the home page
      navigate("/");
    })
  }


  const register = async() =>{
    console.log("Login");
  }


  return (
    <>
      <div className="outer-container">
        <div className="signin">Sign in</div>
        <div className="emaildes">
          <div className="email">Email *</div>
          {/* Signin Input */}
          <input type="email" name="email" id="emailbox" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>

        <div className="passdes">
          <div className="password">Password *</div>
          {/* Password Input */}
          <input type="password" name="password" id="passwordbox" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>
        

        <div className="remme">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <div className="rem">Remember me</div>
        </div>

        {/* <div className="sign">
        <Link to="/sigin"><p id="in">Sign in</p></Link>
        </div> */}

        {/* Signin Button */}
        <input type="button" value="Sign in" id="sign" color="white" onClick={login}/>
        <div className="imp">
          <Link to="/sigin" id="forgetpass">
            Forgotten your password?
          </Link>
          <div className="noacc">
            No Account?<Link to="/sigin">Sign up</Link>{" "}
          </div>
          <div className="google">

          <input type="button" value="Sign up" id="signup" color="white" onClick={register} />
            {/* <Link to="/sigin">
              <img
                className="google-signin"
                id="img"
                src={require("./google.png")}
                alt="google"
              />{" "}
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}