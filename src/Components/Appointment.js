import React, {useState} from 'react'
import "./Appointment.css"

const Appointment = ({appointment, handleDelete, handleUpdatedAppt }) => {
  const {name, rental, slope, date, id, confirm } = appointment
  const [confirmAppt, setConfirmAppt] = useState(false)
  // console.log("appt.js",rental)
  // console.log("appointment",appointment)


  const boundOnDelete = () => {
    handleDelete(id)
  }

  // console.log("appointment", id)
  const onHandleConfirmClick = () => {
    const updatedObj = {
      confirm: "true"
      
    }
      //, TODO dynamic id
      fetch(`http://localhost:3000/api/v1/appointments/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedObj),
    })
        .then(response => response.json())
        .then(handleUpdatedAppt)
        setConfirmAppt(confirmAppt)
  }

  // const onHandleConfirmClick = () => {
  //   setConfirmAppt((confirmAppt) => !confirmAppt)
  // }
  
  // setConfirmAppt((confirm) => !confirm)


  return (
  <div className="appointment-card-div">
       <div> {date}</div>
       <h2>{name}</h2>
       <div>{rental.sport}</div>
       <div>{slope.name}</div>
       <div>{slope.difficulty}</div>
       
       <button onClick={onHandleConfirmClick}> {confirm ? "Confirmed!" : "Not Confirmed"}</button>
       <button apptId={id} onClick={boundOnDelete}>Cancel</button>
       
   </div>
  )
}

export default Appointment