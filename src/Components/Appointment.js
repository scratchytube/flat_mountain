import React from 'react'


const Appointment = ({appointment, handleDelete}) => {
  const {name, rental, slope, date, id} = appointment
  console.log("appt.js",rental)

  const boundOnDelete = () => {
    handleDelete(id);
  }

  return (
  <div>
       <div className="card-div"> {date}</div>
       <h2>{name}</h2>
       <div>{rental.sport}</div>
       <div>{slope.name}</div>
       <div>{slope.difficulty}</div>
       
       {/* <button onCLick={handleUpdate}>Update</button> */}
       <button apptId={id} onClick={boundOnDelete}>Delete</button>
   </div>
  )
}

export default Appointment