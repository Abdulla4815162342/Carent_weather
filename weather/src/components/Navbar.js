import React from 'react'
import Button from './Button';
import TableWidget from './Table';
import Clock from './Clock';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {updateSpeedValue} from '../redux/actions/widget'
import {updatePressureValue} from '../redux/actions/widget';
import {updateHumidityValue} from '../redux/actions/widget';
import {updateSunriseValue} from '../redux/actions/widget';
import {updateSunsetValue} from '../redux/actions/widget';
import {updateGeoValue} from '../redux/actions/widget';
import {setWidgetData} from '../redux/actions/widget';
// import moment from 'moment';

class Navbar extends React.Component  {
  componentDidMount(){
    this.props.setWidgetData('metric',524901,'d04912cef389db95d18b7df8073b26df')
  }

  render() {
 const temp = Math.ceil (this.props?.widgetDataApi?.main?.temp )
 



  return (
    <div className='boby'>

    <h2 className='moscow'> Weather in {this.props.cityName}, RU </h2>
    <Button />
    <h2 className='gradus'>{temp} &deg;C </h2>
    
  <Clock />
  <h3 className='broken'>{}</h3>
 
  <TableWidget 
  widgetDataApi ={this.props.widgetDataApi}
      speedWind={this.props.widgetDataApi}
      onUpdateSpeedValue={this.props.updateSpeedValue}
      pressureP={this.props.pressureP}
      onUpdatePressureValue={this.props.updatePressureValue}
      humidity={this.props.humidity}
      onUpdateHumidityValue={this.props.updateHumidityValue}
      sunrise={this.props.sunrise}
      onUpdateSunriseValue={this.props.updateSunriseValue}
      sunset={this.props.sunset}
      onUpdateSunsetValue={this.props.updateSunsetValue}
      geo={this.props.geo}
      onUpdateGeoValue={this.props.updateGeoValue}
      valuesShow={this.props.showFlagValues}
  />

      
 
     </div>
     
   )
   }
 }
 
let mapStateToProps = (state) => {
return {

broken: state.widgetData.broken,
cityName: state.widgetData.cityName,
celsius: state.widgetData.dataWeatherWidget.celsius,
  speedWind: state.widgetData.dataWeatherWidget.speed,
  showFlagValues: state.widgetData.dataWeatherWidget.showValues,
  pressureP: state.widgetData.dataWeatherWidget.pressure,
  humidity:  state.widgetData.dataWeatherWidget.humidity,
  sunrise:   state.widgetData.dataWeatherWidget.sunrise,
  sunset:    state.widgetData.dataWeatherWidget.sunset,
  geo:      state.widgetData.dataWeatherWidget.geo,
  widgetDataApi: state.widgetDataApi,
};
}
 
function mapDispatchToProps(dispatch) {
  return {
    
     updateSpeedValue: () => dispatch(updateSpeedValue()),
     updatePressureValue: () => dispatch(updatePressureValue()),
     updateHumidityValue: () => dispatch(updateHumidityValue()),
     updateSunriseValue: () => dispatch(updateSunriseValue()),
     updateSunsetValue: () => dispatch(updateSunsetValue()),
     updateGeoValue: () => dispatch(updateGeoValue()),
     setWidgetData: (unitNew, idCity, appId) => setWidgetData(unitNew, idCity, appId, dispatch),  

    };
}
 
 
 export default connect(mapStateToProps, mapDispatchToProps)( Navbar);