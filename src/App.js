import React from 'react';
import './App.css';
import {Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux'; 
import styled from 'styled-components';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component'

import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector';



class App extends React.Component {
  unsubscribeFromAuth=  null
  
componentDidMount(){    
                                      //used to firing the fetch to the back end to fetch data
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
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to="/" />):(<SigninAndSignUpPage/>)} />
        <Route exact path='/shop/:collectionId' component={CollectionPage}/>
      </div>
    )
  }
}

const mapStateToProps = (state)  =>({           //now, this func. will give access to this.state.currentUser
  currentUser:selectCurrentUser(state)  
});
 
const mapDispatchToprops = dispatch => ({                     //this func. will set the currentUser when action occours by dispatching the user
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps ,mapDispatchToprops)(App);
