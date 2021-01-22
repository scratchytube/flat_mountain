import React from 'react'
import Login from './Login' 
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
      <Login />
      <Rental />
      <Slopes />
      <ApptForm />
    </div>
  );
}

export default App;
