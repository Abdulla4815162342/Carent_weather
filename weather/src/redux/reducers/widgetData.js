import {handleActions} from 'redux-actions';
import {UPDATE_SPEED_VALUE} from '../actions/widget'
import {UPDATE_PRESSURE_VALUE} from '../actions/widget'
import {UPDATE_HUMIDITY_VALUE} from '../actions/widget'
import {UPDATE_SUNRISE_VALUE} from '../actions/widget'
import {UPDATE_SUNSET_VALUE}  from '../actions/widget'
import {UPDATE_GEO_VALUE} from '../actions/widget'


export default handleActions(
  {
    [UPDATE_SPEED_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, speed: action.payload, showValues: {...state.dataWeatherWidget.showValues, isSpeed: !state.dataWeatherWidget.showValues.isSpeed}},
    }) ,
    
    
    [UPDATE_PRESSURE_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, pressure: action.payload, showValues: {...state.dataWeatherWidget.showValues, isPressure: !state.dataWeatherWidget.showValues.isPressure}},
    }) ,
    [UPDATE_HUMIDITY_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, humidity: action.payload, showValues: {...state.dataWeatherWidget.showValues, isHumidity: !state.dataWeatherWidget.showValues.isHumidity}},
    }) ,

    [UPDATE_SUNRISE_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, sunrise: action.payload, showValues: {...state.dataWeatherWidget.showValues, isSunrise: !state.dataWeatherWidget.showValues.isSunrise}}
    }) ,

    [UPDATE_SUNSET_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, sunset: action.payload, showValues: {...state.dataWeatherWidget.showValues, isSunset: !state.dataWeatherWidget.showValues.isSunset}},
    }),
   
    
    [UPDATE_GEO_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, geo: action.payload, showValues: {...state.dataWeatherWidget.showValues, isGeo: !state.dataWeatherWidget.showValues.isGeo}},
    }) 
  },

  
    
  


  { location: { city: '', country: '' },
  displayOptions: {
    unit: '',
    sort: '',
    sortElemets: ['asc', 'desc'],
    sortKey: '',
    isFetching: false,
    tempUnit: '',
    errorLoadingWidgetData: false,
    textError: '',
  },
  dataWeatherWidget: {
    celsius: 4,
    icon: '',
    temp: null,
    description: '',
    speed: '',
    pressure: '',
    humidity: '',
    sunrise: '',
    sunset: '',
    dataTable: [],
    dataTime: '',
    showValues: {
      isSpeed: false,
      isPressure: false,
      isHumidity: false,
      isSunrise: false,
      isSunset: false,
      isGeo: false,
    }
  },

  idCity: 524901,
  unit: 'metric',
  appId: 'd04912cef389db95d18b7df8073b26df',
  cityName: 'Moscow',
}
);