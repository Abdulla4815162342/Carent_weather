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



  
const speed = showValues.isSpeed === true ? props?.widgetDataApi?.wind?.speed : ''
const pressure = showValues.isPressure === true ? props?.widgetDataApi?.main?.pressure + ' ГПа' : ''
const humidity = showValues.isHumidity === true ? props?.widgetDataApi?.main?.humidity + '%' : '' 
const sunrise = showValues.isSunrise === true ? (formattedTime) : '' 
const sunset = showValues.isSunset === true ? (formattedTimes) : ''
const geo = showValues.isGeo ===   true ? 'Lat:' + props?.widgetDataApi?.coord?.lat  : ''
const ge = showValues.isGeo ===    true ? 'Lot:'  + props?.widgetDataApi?.coord?.lon  : ''


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

    <td><form onClick={()=> {props.onUpdateSpeedValue()}}>Wind</form></td><td>{speed}</td></tr>
    <tr>
    <td><form  onClick={()=> {props.onUpdatePressureValue()}}>Pressure</form></td><td>{pressure}</td></tr>
    <tr>
    <td><form onClick={()=> {props.onUpdateHumidityValue()}}>Humidity</form></td><td>{humidity  }</td></tr>
    <tr>
    <td><form onClick={()=> {props.onUpdateSunriseValue()}}>Sunrise</form></td><td>{sunrise}</td></tr>
    <tr>
    <td><form onClick={()=> {props.onUpdateSunsetValue()}}>Sunset</form></td><td>{sunset}</td></tr>
    <tr>
   <td><form onClick={()=> {props.onUpdateGeoValue()}}>Geo coords</form></td><td className='oran'>  {geo}  {ge}</td></tr>
    
    </tbody>
   
    </table>

    </div>
  )
}
   


export default Table;