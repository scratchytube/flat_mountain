import React, { useState, useEffect } from 'react'
import Appointment from './Appointment'


const ApptForm = () => {
const [name, setName] = useState("")
const [gearRental, setGearRental]= useState("1")
const [slope, setSlope] = useState("1")
const [date, setDate] = useState("")
const [appointments,setAppointments] = useState([])

useEffect(()=> {
   fetch("http://localhost:3000/api/v1/appointments")
   .then((r)=>r.json())
   .then((appointments) => 
   setAppointments(appointments))
},[])

// console.log(appointments)

const appointmentsDetail = appointments.map((appt)=>{
   return <Appointment appointment={appt}/>
})

// const handleUpdatedAppointment


const handleSubmit = (e) => {
   e.preventDefault()
   const formData = {
      user_id: name,
      rental_id: gearRental,
      slope_id: slope,
      date: date
      }
   
      fetch(`http://localhost:3000/api/v1/appointments${name}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
              .then(response => response.json())
            //   .then(handleUpdatedAppointment)

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
            id="name"
            value={gearRental}
            onChange={(e) => setGearRental(e.target.value)}>
               <option value="1">Option 1 Helmet Only</option>
               <option value="2">Option 2 Helmet & Board/Skii</option>
               <option value="3">Option 3 Helmet & Board/skii & Clothes</option>
               <option value="4">Option 4 Helmet & Board/skii & Clothes & Goggles</option>
             
            </select>
            <label> Select a Slope</label>
            <select
            id="type"
            value={slope}
            onChange={(e) => setSlope(e.target.value)}>
               <option value="1">Option 1 Flat Mountain</option>
               <option value="2">Option 2 Super Flat Mountain</option>
               <option value="3">Option 3 Flatty McFlatterson Mountain</option>
               <option value="4">Option 4 Super Dangerous Mountain</option>
               <option value="5">Option 5 Best Mountain</option>
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
           
           {appointmentsDetail}
           
     
      </section>
       
      
    
   )
}

export default ApptForm