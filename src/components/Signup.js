import React, { useState } from "react";
import "../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import axios from "axios";

export default function Signup(props) {
  // States to handle authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [profile_image, setProfile] = useState();

  // For navigation purpose
  const navigate = useNavigate();

  const login = async () => {
    if (props.is_user) {
      axios
        .post("http://localhost:8000/app/save_user/", {
          email: email,
          password: password,
          name: name,
          contact: contact,
          address: address,
        })
        .then((response) => {
          console.log(response);
          navigate("/user_signin");
        });
    } else {
      axios
        .post(
          "http://localhost:8000/app/save_sponsor/",
          {
            email: email,
            password: password,
            name: name,
            type: type,
            contact: contact,
            address: address,
            profile_image: profile_image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data", // Important for handling file uploads
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate("/sponsor_signin");
        });
    }
  };
  const register = async () => {
    console.log("Login");
  };

  return (
    <>
      <div className="outer-container">
        <div className="signup">
          Create account as&nbsp;
          <p className="dynamicTextSignin">
            {props.is_user === true ? "User!" : "Sponsor!"}
          </p>
        </div>
        <div className="emaildes">
          <div className="email">Email *</div>
          {/* Signin Input */}
          <input
            type="email"
            name="email"
            id="emailbox"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="passdes">
          <div className="password">Password *</div>
          {/* Password Input */}
          <input
            type="password"
            name="password"
            id="passwordbox"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="emaildes">
          <div className="signupemail">Name *</div>
          {/* Signin Input */}
          <input
            type="text"
            name="name"
            id="emailbox"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        {!props.is_user ? (
          <div className="emaildes">
            <div className="email">Type *</div>
            {/* Signin Input */}
            <input
              type="text"
              name="type"
              id="emailbox"
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </div>
        ) : (
          <div></div>
        )}

        <div className="emaildes">
          <div className="email">Contact *</div>
          {/* Signin Input */}
          <input
            type="number"
            name="contact"
            id="emailbox"
            onChange={(event) => {
              setContact(event.target.value);
            }}
          />
        </div>

        <div className="emaildes">
          <div className="email">Address *</div>
          {/* Signin Input */}
          <input
            type="text"
            name="address"
            id="emailbox"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>

        {!props.is_user ? (
          <div>
            <div className="email">Profile Pic *</div>
            {/* Signin Input */}
            <input
              type="file"
              name="profile"
              onChange={(event) => {
                setProfile(event.target.files[0]);
              }}
              accept="image/*"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="remme">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <div className="rem">Remember me</div>
        </div>

        {/* Signin Button */}
        <input
          type="button"
          value="Sign Up"
          id="sign"
          color="white"
          onClick={login}
        />
        <div className="imp">
          <Link to="/sigin" id="forgetpass">
            Forgotten your password?
          </Link>
          <div className="noacc">
            No Account?
            <Link to="/sigin" className="signupLink">
              Sign up
            </Link>{" "}
          </div>
          <div className="google">
            <input
              type="button"
              value="Sign up"
              id="signup"
              color="white"
              onClick={register}
            />
          </div>
        </div>
      </div>
    </>
  );
}
