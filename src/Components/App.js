import React from 'react' 
import Rental from './Rental'
import Slopes from './Slopes'
import ApptForm from './ApptForm'
import NavBar from './NavBar'
import Home from './Home'
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  
  return (
    <>
      
        <Router>  
          <NavBar/>
          <Switch>
            <Route path ="/" exact></Route>
          </Switch>
        </Router>

        {/* <Route exact path="/">
          <Home />
        </Route>

        <Route> 
          <Rental path="/Rental"/>
        </Route>

        <Route>
          <Slopes path="/Slopes"/>
        </Route>

        <Route>
          <ApptForm path="/ApptForm"/>
        </Route> */}

     
   
      
    </>
  );
}

export default App;
