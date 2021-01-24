import React from 'react' 
import NavBar from './NavBar'
import Home from './Home'
import '../App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  
  return (
    <>
      
        <Router>  
          <NavBar/>
          <Switch>
            <Route path ="/" exact component={Home}></Route>
          </Switch>
        </Router>

        {/* <Route exact path="/">
          <Home />
        </Route> */}

        {/* <Route> 
          <Rental path="/Rental"/>
        </Route>

        <Route>
          <Slopes path="/Slopes"/>
        </Route> */}
    </>
  );
}

export default App;
