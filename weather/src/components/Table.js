import React from 'react'

 const Table = (props) => {
  return (
    <div className='table'>
    
    <table className="blueTable">
    <thead>
    <tr>
    <th className='para'>Parameters</th>
    <th className='para'>Values</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><div onClick={()=>{props.onUpdateSpeedValue()}}>Wind</div></td><td>{props.speedWind}</td></tr>
    <tr>
    <td>Pressure</td><td>1023 hpa</td></tr>
    <tr>
    <td>Humidity</td><td>62 %</td></tr>
    <tr>
    <td>Sunrise</td><td>07:23</td></tr>
    <tr>
    <td>Sunset</td><td>17:03</td></tr>
    <tr>
    <td>Geo coords</td><td className='oran'>[55.75,37.62]</td></tr>
    
    </tbody>
   
    </table>

    </div>
  )
}
export default Table;