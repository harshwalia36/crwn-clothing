import React from 'react';
import './signin-and-signup-page.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSignUpPage = () => (
    <div className="signin-and-signup-page">
      <SignIn />
      <SignUp/>
    </div>
);

export default SigninAndSignUpPage;