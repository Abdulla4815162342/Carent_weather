import React from 'react'
import Button from './Button';
import TableWidget from './Table';
import Clock from './Clock';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateSpeedValue} from '../redux/actions/widget'

class Navbar extends React.Component  {
  render() {
   return (
     <div className='boby'>
     
     <h2 className='moscow'> Weather in Moscow, RU </h2>
     <Button />
     <h2 className='gradus'>12 &deg;C </h2>
     <h3 className='broken'>Broken strong</h3>
  <Clock />
 
     <TableWidget speedWind={this.props.speedWind}
      onUpdateSpeedValue={this.props.updateSpeedValue} />
 
     </div>
     
   )
   }
 }
 
 let mapStateToProps = (state) => {
   return {
     speedWind: state.widgetData.dataWeatherWidget.speed
   };
 }
 
 function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {
      updateSpeedValue,
     },
     dispatch,
   );
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)( Navbar);