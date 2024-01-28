import React from 'react'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import SwitchTabs from '../components/SwitchTabs'

export default function SignupPage(props) {
  return (
    <div>

    <Navbar></Navbar>
    <div className='switchTabs'>
    <SwitchTabs/>
    </div>

    <Signup is_user={props.is_user} ></Signup>:

    </div>
  )
}
