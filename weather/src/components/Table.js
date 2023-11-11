import React from 'react'




 const Table = (props) => {
  const showValues = props.valuesShow



  const unix_timestamp = props?.widgetDataApi?.sys?.sunrise;
  const dates = new Date(unix_timestamp * 1000);
  const hourses = dates.getHours();
  const minutess = "0" + dates.getMinutes();
  const secondss = "0" + dates.getSeconds();
  const formattedTime = hourses + ':' + minutess.substr(-2) + ':' + secondss.substr(-2);

  const unix_times = props?.widgetDataApi?.sys?.sunset;
  const date = new Date(unix_times * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTimes = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);




const speed = props?.widgetDataApi?.wind?.speed
const pressure =  props?.widgetDataApi?.main?.pressure + ' ГПа'
const humidity = props?.widgetDataApi?.main?.humidity + '%' 
const sunrise =  (formattedTime) 
const sunset =  (formattedTimes) 
const geo =   props?.widgetDataApi?.coord?.lat  
const ge =    props?.widgetDataApi?.coord?.lon 
 


  return (
    <div>
    
    <table className="blueTable">
    <thead>
    <tr>
    <th className='para'>Parameters</th>
    <th className='para'>Values</th>
    </tr>
    </thead>
    <tbody>
    <tr>

    <td><form>Wind</form></td><td>{speed}</td></tr>
    <tr>
    <td><form>Pressure</form></td><td>{pressure}</td></tr>
    <tr>
    <td><form>Humidity</form></td><td>{humidity  }</td></tr>
    <tr>
    <td><form>Sunrise</form></td><td>{sunrise}</td></tr>
    <tr>
    <td><form>Sunset</form></td><td>{sunset}</td></tr>
    <tr>
   <td><form>Geo coords</form></td><td> [{geo}]   [{ge}] </td></tr>
    
    </tbody>
   
    </table>

    </div>
  )
}
   


export default Table;