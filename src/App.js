import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';


const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  )
}

export default App;
