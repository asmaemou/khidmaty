import React from 'react';
import FooterComp from '../Components/ReactComponents/FooterComp';
import SignInPage from '../Components/ReactComponents/SignInPage'


const SignIn: React.FC = () => {
  return (
    <div>
     <SignInPage/>
     <FooterComp/>
    </div>
  );
};

export default SignIn;