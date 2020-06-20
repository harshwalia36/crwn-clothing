import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux'; 

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'



class App extends React.Component {
  unsubscribeFromAuth=  null
  
componentDidMount(){        //used to firing the fetch to the back end to fetch data
const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth =>{        //inside it takes the function where  the parameter is what the user state is of the auth on our firebase project 
     if(userAuth)
      {const userRef=await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          });
          
        });
      }
      else{
        setCurrentUser(userAuth);

      }
            
    });              
  }

  componentWillUnmount(){        
  this.unsubscribeFromAuth();   //close subscription 
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninAndSignUpPage} />
      </div>
    )
  }
}
 
const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToprops)(App);
