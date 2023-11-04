import React from 'react'
import {  Link,Route, Routes } from 'react-router-dom'
import { Contacts } from './Contacts';
 function Button () {
  return ( 
    <div  className='but'>


    <Link to="/Contacts" className='styled'>&deg;C</Link> 
   
    <Link to="/Contacts" className='styled'>&deg;F</Link>
    
<Routes>
    <Route path="/contacts" element={  <Contacts />}/> 
    </Routes>
  
    </div>
  )
}




   



export default Button;