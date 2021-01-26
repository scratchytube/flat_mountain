import React from 'react'

const SlopesCard = ({name, altitude, difficulty}) => {
    
    

return (
    <div className="cardDiv">
        <h1>Slopes and Tracks</h1>
        <p> Name: {name}</p>
        <p> Altitude: {altitude}</p>
        <p> Difficulty: {difficulty}</p>
    </div>
)
}

export default SlopesCard