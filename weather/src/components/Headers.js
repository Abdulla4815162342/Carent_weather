import React from 'react'
import { Routes,Route,Link } from "react-router-dom"
import { Contacts } from './Contacts'
import Widget from './Widget'
import { Img } from './Img'




export const Headers = () => {
return (
<div >

<div className="black ">
<div>
  <Link to="/Contacts"  className="btn"> Contacts</Link>
  <Link to="/Img" className="btn"> Home</Link>
  <Link to="/widget" className="btn"> Widget</Link>
</div>
</div>
<Routes>
<Route path="/contacts" element={  <Contacts />}/>
<Route path="/widget" element={  <Widget />}/>
 <Route path="/img" element={  <Img />}/>
</Routes>

</div>
)
}
