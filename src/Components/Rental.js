import React from 'react'
import RentalCard from './RentalCard'

const Rental = ({rental}) => {

console.log(rental)
    const rentalArray = rental.map((gear) => (
        <RentalCard gear={gear} />
    ))
    return (
        <div className="rental-div-container">
            {rentalArray}
        </div>

        
        
    )
}

export default Rental