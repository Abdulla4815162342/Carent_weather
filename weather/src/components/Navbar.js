import React from 'react'
import Button from './Button';
import Table from './Table';
import Clock from './Clock';




 const Navbar = () => {
  return (
    <div className='boby'>
    
    <h2 className='moscow'> Weather in Moscow, RU </h2>
    <Button />
    <h2 className='gradus'>12 &deg;C </h2>
    <h3 className='broken'>Broken strong</h3>
 <Clock />

    <Table />

    </div>
    
  )
}
export  default Navbar;