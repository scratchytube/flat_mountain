import React from 'react'

const RentalCard = ({gear}) => {
    // const {price, sport, available, age} = gear
    console.log(gear)
 

    return(
    <div>
        <p>Available: {gear.available? "Yes" : "no"}</p>
        <p>Sport: {gear.sport}</p>
        <img src={gear.image} alt="snowboard"></img>
    </div>    

)
}

export default RentalCard

