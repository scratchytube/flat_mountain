import React from 'react'


const Appointment = ({appointment}) => {
   const {name, rental, slope, date} = appointment
  console.log("appt.js",rental)

  return (
  <div>
       <div> {date}</div>
       <h2>{name}</h2>
       <div>{rental.sport}</div>
       <div>{slope.name}</div>
       <div>{slope.difficulty}</div>
       
       {/* <button onCLick={handleUpdate}>Update</button>
       <button onClick={handleDelete}>Delete</button> */}
   </div>
  )
}

export default Appointment