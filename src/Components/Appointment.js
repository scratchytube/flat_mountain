import React from 'react'


const Appointment = ({appointment}) => {
   const {name, gearRental, slope, date} = appointment
  console.log(appointment)
  return (
  <div>
       <h2>{name}</h2>
       <p>{gearRental}</p>
       <p>{slope}</p>
       <p> {date} </p>
       
       {/* <button onCLick={handleUpdate}>Update</button>
       <button onClick={handleDelete}>Delete</button> */}
   </div>
  )
}

export default Appointment