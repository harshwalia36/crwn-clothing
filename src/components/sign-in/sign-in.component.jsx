import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super(); 

        this.state={
            email:'',
            password:''
        }
    }

handleSubmit= event => {
  event.preventDefault();                      //this will prevent the default submit action on submit
                                              //bcz we want a full control over submit
    this.setState({email:'',password:''})    //and we are clearing the fields on submitting
    }

handleChange=event => {
        const {value,name }= event.target;
        this.setState({[name]:value });
    }
    render() {
      return(
          <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>
              <form onSubmit={this.handleSubmit}>
               
                  <FormInput type="email" name="email" value={this.state.email} label="Email" handleChange={this.handleChange} required/>
                  <FormInput type="password" name="password" value={this.state.password} label="Password" handleChange={this.handleChange} required/>
                  <div className="buttons">
                  <CustomButton type="submit">Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                      Sign In with Google
                      </CustomButton>
                  </div>
                  
              </form>
          </div>
      )
    }
}

export default SignIn;