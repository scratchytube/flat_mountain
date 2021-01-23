import React from 'react' 
import Rental from './Rental'
import Slopes from './Slopes'
import ApptForm from './ApptForm'
import NavBar from './NavBar'
import Home from './Home'
import '../App.css';
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      
      <Home />
      <Rental />
      <Slopes />
      <ApptForm />
    </div>
  );
}

export default App;
