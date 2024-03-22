import React from 'react';
import FooterComp from '../Components/ReactComponents/FooterComp';
import SignInPage from '../Components/ReactComponents/SignInPage'
import Navbar from '../Components/ReactComponents/NavBar';

const SignIn: React.FC = () => {
  return (
    <div>
      <Navbar/>
     <SignInPage/>
     <FooterComp/>
    </div>
  );
};

export default SignIn;