import React from 'react'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'

export default function SignupPage(props) {
  return (
    <div>

    <Navbar></Navbar>

    <Signup is_user={props.is_user} ></Signup>:

    </div>
  )
}
