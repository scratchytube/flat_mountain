import React from 'react'
import Login from './Login' 
import Rental from './Rental'
import Slopes from './Slopes'
import ApptForm from './ApptForm'
import NavBar from './NavBar'
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Rental />
      <Slopes />
      <ApptForm />
    </div>
  );
}

export default App;
