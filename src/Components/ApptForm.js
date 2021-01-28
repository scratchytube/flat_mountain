import React, { useState, useEffect } from 'react'
import Appointment from './Appointment'
import "./ApptForm.css"


const ApptForm = ({
   rental: rentalList, 
   slope: slopeList,
}) => {
const [name, setName] = useState("")
const [date, setDate] = useState("")
const [appointments,setAppointments] = useState([])
const [selectedRental, setSelectedRental] = useState("1")
const [selectedSlope, setSelectedSlope] = useState("1")
// console.log(typeof rental)


useEffect(()=> {
   fetch("http://localhost:3000/api/v1/appointments")
   .then((r)=>r.json())
   .then((appointments) => 
   setAppointments(appointments))
},[])


const handleUpdatedAppointment = appt => {
   const newAppt = [appt, ...appointments]
   setAppointments(newAppt)
}


const handleDelete = (id) => {
   console.log('deleting id', id)
   fetch(`http://localhost:3000/api/v1/appointments/${id}`,{
      method: "DELETE",
    })
   // Promise.resolve()
   .then(() => {
      const remainingAppts = appointments.filter(appt => appt.id !== id);
      setAppointments(remainingAppts);
   })
   }

   const handleUpdatedAppt = updatedAppt => {
      const updatedMyAppointment = appointments.map((misterAppt) => 
      misterAppt.id === updatedAppt.id ? updatedAppt : misterAppt)
      setAppointments(updatedMyAppointment)
   }



const appointment = appointments.map((appt) => (
   <Appointment  key={appt.id} appointment={appt} handleUpdatedAppt={handleUpdatedAppt} handleDelete={handleDelete}/>
))



const handleSubmit = (e) => {
   e.preventDefault()
   const formData = {
      user_id: "2", // TODO to update
      rental_id: selectedRental,
      slope_id: selectedSlope,
      date
      
      }
      console.log({formData})
      //TODO persist
      fetch(`http://localhost:3000/api/v1/appointments`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
              .then(response => response.json())
              .then(handleUpdatedAppointment)

        }
        
        const renderSlopeList = () => {
         //   console.log(slope)
           return(
              slopeList.map((slope) => {
                 return(
                    <option
                       key={slope.id}
                       value={slope.id}
                       >
                     {slope.name}
                    </option>
                 )
              })
           )
        }

        const renderRentalList = () => {
        
           return(
              
              rentalList.map(({id, sport}) => {
               
                 return(
                    <option
                    key={id}
                    value={id}
                    >
                  {sport}
                    </option>
                 )
              }
              )
           )
        }

        const changeRentalHandler = event => {
         setSelectedRental(event.target.value)    
         }
    
         const changeSlopeHandler = event => {
               setSelectedSlope(event.target.value)
         }
         // console.log(renderSlopeList())
   
   return( 
      <section className="appt-form-div">
         
         <form onSubmit={handleSubmit} className="form">
            <h3> Book a new Appointment</h3>
            {/* <label> Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> */}

            <label> Gear Rental</label>
            <select
            value={selectedRental}
            onChange={changeRentalHandler}>
             {renderRentalList()}
            </select>
            
            <label> Select a Slope</label>
            <select
            value={selectedSlope}
            onChange={changeSlopeHandler}>
             {renderSlopeList()}
             
            </select>

            <label> Date and time</label>
            <input 
            type="date" 
            id="name" 
            name="name"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />

            <input 
            type="submit"
            name="submit"
            value="Create a New Appt"
            className="submit"
            />

           </form>
           
           
           <div className="appointment-container">
           <h2>Your Appointments</h2>
            {appointment}
           </div>
     
           
      </section>
       
      
    
   )
}

export default ApptForm