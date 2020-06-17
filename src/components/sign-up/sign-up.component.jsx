import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        
        const {displayName,email,password, confirmPassword}=this.state;

        if(password!==confirmPassword){
            alert('password do not match');
            return; 
        }

        try{  
            const { user} = await auth.createUserWithEmailAndPassword(email,password);  //create a user with email and password and return it.

            await createUserProfileDocument(user, { displayName });

            
        this.setState ({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
       });
        }
        catch(err) {
                console.error(err);
        }
    }

    handleChange= async event =>{
            const {value, name}= event.target;
            this.setState({[name]:value});         // [name] dynamically take name and value acc. to it.
    }    

    render() {
        const {displayName,email,password, confirmPassword}=this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email '
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword'
                    required
                   />
                    <CustomButton type="submit" onSubmit={this.handleSubmit}>SIGN UP</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default Signup;
