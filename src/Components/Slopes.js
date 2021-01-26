import React from 'react'
import SlopesCard from './SlopesCard'

const Slopes = ( {slope} ) => {
    console.log(slope)

    const slopeArray = slope.map((singleSlope) => (
        <SlopesCard name={singleSlope.name} altitude={singleSlope.altitude} difficulty={singleSlope.difficulty}/>
    ))

    return (
        <div>
            {slopeArray}
        </div>
    
    )
}

export default Slopes