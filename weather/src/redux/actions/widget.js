import { weatherAPI } from "../../api/weatherApi";




  export const UPDATE_SPEED_VALUE = 'UPDATE_SPEED_VALUE'


  export const updateSpeedValue =() => {
  return {
  type: UPDATE_SPEED_VALUE,
  payload: '3.0 m/c'
  };
  };
  export const UPDATE_PRESSURE_VALUE = 'UPDATE_PRESSURE_VALUE'


  export const updatePressureValue =() => {
  return {
    type: UPDATE_PRESSURE_VALUE,
    payload: '5.0 pha'
  };
  };

  export const UPDATE_HUMIDITY_VALUE = 'UPDATE_HUMIDITY_VALUE'


  export const updateHumidityValue =() => {
    return {
      type: UPDATE_HUMIDITY_VALUE,
      payload: '62 %'
    };
    };

    export const UPDATE_SUNRISE_VALUE = 'UPDATE_SUNRISE_VALUE'


    export const updateSunriseValue =() => {
      return {
        type: UPDATE_SUNRISE_VALUE,
        payload: '7:23'
      };
      };

export const UPDATE_SUNSET_VALUE = 'UPDATE_SUNSET_VALUE'
export const updateSunsetValue =() => {
  return {
    type: UPDATE_SUNSET_VALUE,
    payload: '17:03'
  };
  };
  
  export const UPDATE_GEO_VALUE = 'UPDATE_GEO_VALUE'
  export const updateGeoValue =() => {
    return {
      type: UPDATE_GEO_VALUE,
      payload:' [55.75,37.62]'
    };
    };





export const GET_WIDGET_DATA = 'GET_WIDGET_DATA'

export const setWidgetData = (unitNew, idCity, appId, dispatch) => {

  weatherAPI
    .getWeatherInformation(unitNew, idCity, appId)
    .then((response) => {
   
      dispatch({
      type: GET_WIDGET_DATA,
      payload: response.data
    });
    });
    
};    



  