import React from 'react'

const RentalCard = ({gear}) => {
    // const {price, sport, available, age} = gear
    console.log(gear)

    const gearData = gear.map((outfit) => (
        <div className="cardDiv">
            <p>Price:{outfit.price}</p>
            <p>Age: {outfit.age}</p>
            <p>Available: {outfit.available}</p>
            <p>Sport: {outfit.sport}</p>
        </div>
    ))

    return(
    <div>
        {gearData}
    </div>    

)
}

export default RentalCard

