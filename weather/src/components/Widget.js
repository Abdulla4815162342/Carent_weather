import React from 'react'
import TableWidget from './Table';
import Clock from './Clock';
import { connect } from 'react-redux';
import {setWidgetData} from '../redux/actions/widget';
import { Switch} from 'antd';
import { Link } from 'react-router-dom'
class Navbar extends React.Component  {
componentDidMount(){
  this.props.setWidgetData('metric',524901,'d04912cef389db95d18b7df8073b26df')
  // this.props.setWidgetData('imperial',524901,'d04912cef389db95d18b7df8073b26df')
}

render() {
const temp = Math.ceil (this.props?.widgetDataApi?.main?.temp)
const img = this.props?.widgetDataApi




return (
    <div className='centr'>
    <div>
      <h3 className='header'>Current weather and forecasts in your city</h3>
      <h2 className='moscow'> Weather in {this.props.cityName}, RU </h2>
    </div>
    <div className='tempObject'>
    <h2 className='gradus'> {temp} &deg;C </h2> 
    <div>
       <Switch checkedChildren="C" unCheckedChildren="F" defaultChecked handleSize={100} className='checked'/>
    </div>
<div className='centr2'><img src = {`https://openweathermap.org/img/wn/04d@2x.png `} alt="img weather" /></div>

</div>

<Clock />

<TableWidget 
widgetDataApi ={this.props.widgetDataApi}

    valuesShow={this.props.showFlagValues}
/>
    </div> 
  )
  }
}

let mapStateToProps = (state) => {
return {
cityName: state.widgetData.cityName,
showFlagValues: state.widgetData.dataWeatherWidget.showValues,
widgetDataApi: state.widgetDataApi,
};
}

function mapDispatchToProps(dispatch) {
return {
    setWidgetData: (unitNew, idCity, appId) => setWidgetData(unitNew, idCity, appId, dispatch),  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( Navbar);



     // <img src={`http://openweathermap.org/img/w/${tempae}.png`} alt="img" />
       // <img src ={(`http://openweathermap.org/img/wn/${tempae}@2x.png 2x`)} alt="img" />
             // <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png 2x`} alt="img weather" />