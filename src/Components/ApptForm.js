import React, { useState, useEffect } from 'react'
import Appointment from './Appointment'


const ApptForm = ({rental, slope, setRental, setSlope}) => {
const [name, setName] = useState("")
const [date, setDate] = useState("")
const [appointments,setAppointments] = useState([])

console.log(typeof rental)


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

   const appointment = appointments.map((appt) => (
      <Appointment appointment={appt} />
   ))



const handleSubmit = (e) => {
   e.preventDefault()
   const formData = {
      user: name,
      rental: rental,
      slope: slope,
      date: date
      }
   
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
           console.log(slope)
           return(
              slope.map((slope) => {
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
           console.log(typeof rental)
      //      return(
      //         console.log(rental)
      //         rental.map((rental) => {
               
      //            return(
      //               <option
      //               key={rental.id}
      //               value={rental.id}
      //               >
      //             {rental.sport}
      //               </option>
      //            )
      //         }
      //         )
      //      )
        }

        const changeRentalHandler = event => {
         setRental(event.target.value)    
         }
    
         const changeSlopeHandler = event => {
               setSlope(event.target.value)
         }

   
   return( 
      <section>
         <form onSubmit={handleSubmit}>
            <h3> Book a new Appointment</h3>
            <label> Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label> Gear Rental</label>
            <select
            value={rental}
            onChange={changeRentalHandler}>
             {renderRentalList()}
            </select>
            
            <label> Select a Slope</label>
            <select
            value={slope}
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
           <div className="appointment-container">Your Appointments</div>
           
           <div>
            {appointment}
           </div>
           
     
      </section>
       
      
    
   )
}

export default ApptForm