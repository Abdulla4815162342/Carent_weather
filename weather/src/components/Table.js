import React from 'react'
// import moment from 'moment';



 const Table = (props) => {
  const showValues = props.valuesShow



  let unix_timestamp = props?.widgetDataApi?.sys?.sunrise;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  let unix_times = props?.widgetDataApi?.sys?.sunset;
  var date = new Date(unix_times * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTimes = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);



  
const speed = showValues.isSpeed === true ? props?.widgetDataApi?.wind?.speed : ''
const pressure = showValues.isPressure === true ? props?.widgetDataApi?.main?.pressure + ' ГПа' : ''
const humidity = showValues.isHumidity === true ? props?.widgetDataApi?.main?.humidity + '%' : '' 
const sunrise = showValues.isSunrise === true ? (formattedTime) : '' 
const sunset = showValues.isSunset === true ? (formattedTimes) : ''
const geo = showValues.isGeo ===   true ? 'Lat' + props?.widgetDataApi?.coord?.lat  : ''
const ge = showValues.isGeo ===    true ? 'Lot' + props?.widgetDataApi?.coord?.lon  : ''


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