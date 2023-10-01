import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Cnopca1 from './Cnopca1';
import Cnopca2 from './Cnopca2';

const Router = () => {
  return (
    <div>
    <header>
    <Link to="/cnopca1" className='wrong'>  Cnopca 1  </Link>
    <Link to="/cnopca2" className='wrong'>  Cnopca 2  </Link>
    </header>
    <Routes>
    <Route path='/cnopca1' element={<Cnopca1 />}/>
    <Route path='/cnopca2' element={<Cnopca2 />}/>
    </Routes>
    
    
    </div>
  )
}
export default Router;