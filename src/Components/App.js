import React from 'react' 
import NavBar from './NavBar'
import Home from './Pages/Home'
import '../App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Rental from './Rental'
import Slopes from './Slopes'
import ApptForm from './ApptForm'

function App() {
  
  return (
    <>
      
        <Router>  
          <NavBar/>
          <Switch>
            <Route path ="/" exact component={Home}>
              <Home />
            </Route>

        <Route path="/ApptForm" >
          <ApptForm />
        </Route>

        <Route> 
          <Rental path="/Rental"/>
        </Route>

        <Route>
          <Slopes path="/Slopes" />
        </Route>

        {/* <Route>
          <Slopes path="*" />
          <h1>404 not found🏂</h1>
        </Route> */}
          </Switch>
        </Router>
    </>
  );
}

export default App;
