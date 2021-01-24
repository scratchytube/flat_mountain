import React from 'react'

const RentalCard = ({price,sport,available, age}) => {
return(
    <>
    <h1>Rental page</h1>
    <h2>Price: {price}</h2>
    <p>Age: {age}</p>
    <p>Available: {available}</p>
    <p>Sport: {sport}</p>
    </>
)
}

export default RentalCard