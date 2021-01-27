import React from 'react'

const SlopesCard = ({name, altitude, difficulty}) => {
    
    

return (
    <div className="card-div">
        <h1>Slopes and Tracks</h1>
        <img src="https://unofficialnetworks.com/wp-content/uploads/sites/88/2018/05/screen-shot-2018-05-04-at-1-13-58-pm.jpg" alt="map"></img>
        <p> Name: {name}</p>
        <p> Altitude: {altitude}</p>
        <p> Difficulty: {difficulty}</p>
    </div>
)
}

export default SlopesCard