import React from 'react'

const SlopesCard = ({difficulty,altitude,name}) => {
return (
    <>
    <h1>Slopes and Tracks</h1>
    <p> Name: {name}</p>
    <p> Altitude: {altitude}</p>
    <p> Difficulty: {difficulty}</p>

    </>
)
}

export default SlopesCard