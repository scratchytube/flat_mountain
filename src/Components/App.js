import React, { useEffect, useState } from 'react' 
import NavBar from './NavBar'
import Home from './Pages/Home'
import '../App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Rental from './Rental'
import Slopes from './Slopes'
import ApptForm from './ApptForm'

function App() {

  const [slope, SetSlope] = useState([])
  const [rental, setRental] = useState([])

useEffect(() => {
fetch(`http://localhost:3000/api/v1/rentals`)
.then((r) => r.json())
.then(rentalArray =>
  setRental(rentalArray))
}, 
[]
)

useEffect(() => {
  fetch(`http://localhost:3000/api/v1/slopes`)
  .then((r) => r.json())
  .then(slopeArray => 
    SetSlope(slopeArray))
})


  
  return (
    <>
      
        <Router>  
          <NavBar/>
          <Switch>
            <Route path ="/" exact component={Home}>
              <Home />
            </Route>

        <Route path="/appointments" >
          <ApptForm SetSlope={SetSlope} slope={slope} rental={rental} setRental={setRental} />
        </Route>
        
        <Route path="/slopes">
          <Slopes  slope={slope}/>
        </Route>

        <Route path="/rentals"> 
          <Rental rental={rental}  />
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
