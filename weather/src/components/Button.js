import React from 'react'
import { Link} from 'react-router-dom'

 const Button = () => {
  return (
    <div  className='but'>
    <Link href='./cel' className='styled'>&deg;C</Link> 
   
    <Link href='./fer' className='styled'>&deg;F</Link>


    </div>
  )
}




   



export default Button;