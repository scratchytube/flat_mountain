import React from 'react'

const SlopesCard = ({name, altitude, difficulty, image}) => {
    
    

return (
    <div className="slopes-card-div">
       
        <img src={image} alt="map"></img>
        <p> Name: {name}</p>
        <p> Altitude: {altitude}</p>
        <p> Difficulty: {difficulty}</p>
    </div>
)
}

export default SlopesCard