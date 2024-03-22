import React from 'react'
import FooterComp from '../Components/ReactComponents/FooterComp';
import SignUpPage1 from '../Components/ReactComponents/SignUpPage1'
import Navbar from '../Components/ReactComponents/NavBar';
const SignUp: React.FC = () => {
  return (
    <div>
      <Navbar/>
        <SignUpPage1 />
        <FooterComp/>
    </div>
  )
}

export default SignUp;
