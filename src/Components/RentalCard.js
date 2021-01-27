import React from 'react'

const RentalCard = ({gear}) => {
    // const {price, sport, available, age} = gear
    console.log(gear)

    const gearData = gear.map((outfit) => (
      
        <div className="card-div">
            <h3>Price:{outfit.price}</h3>
            <p>Age: {outfit.age}</p>
            <p>Available: {outfit.available}</p>
            <p>Sport: {outfit.sport}</p>
            <img src="https://www.kingkeyser.com/istarimages/p/t/pt-151001%21BURTO.jpg" alt="snowboard"></img>
        </div>
    ))

    return(
    <div>
        {gearData}
    </div>    

)
}

export default RentalCard

