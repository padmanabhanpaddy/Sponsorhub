import React from 'react'
import Navbar from '../components/Navbar';
import Signin from '../components/Signin';

export default function SigninPage(props) {
  return (
    <div>

        {/* Navbar */}
        <Navbar></Navbar>

        {/* Signin */}
        <Signin is_user={props.is_user}></Signin>
        
    </div>
  )
}
