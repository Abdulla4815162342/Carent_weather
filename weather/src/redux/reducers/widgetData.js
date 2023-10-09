import {handleActions} from 'redux-actions';
import {UPDATE_SPEED_VALUE} from '../actions/widget'

export default handleActions(
  {
    [UPDATE_SPEED_VALUE]: (state, action) => ({
      ...state,
      dataWeatherWidget: {...state.dataWeatherWidget, speed: action},
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
  },
  idCity: 524901,
  appId: 'd04912cef389db95d18b7df8073b26df',}
);