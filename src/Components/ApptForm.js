import React from 'react'

const ApptForm = () => {

   
   return( 
      <section>
         <form>
            <h3> Book a new Appointment</h3>
            <label> Name</label>
            <input type="text" id="name" name="name"/>

            <label> Gear Rental</label>
            <select>
               <option value="1">Option</option>
               <option value="2">Option 2</option>
               <option value="3">Option 3</option>
               <option value="4">Option 4</option>
               <option value="5">Option 5</option>
            </select>

            <label> Date and time</label>
            <input type="text" id="name" name="name"/>

           

         </form>
      </section>
    
   )
}

export default ApptForm