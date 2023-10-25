import {  combineReducers,  createStore } from 'redux';
import widgetData from './reducers/widgetData';
import widgetDataApi from './reducers/widgetDataApi';

let reducers = combineReducers({

    widgetData: widgetData,
    userName: {},
    widgetDataApi: widgetDataApi,
    
  });

  const keyReduxDevTool = 'REDUX_DEVTOOLS_EXTENSION';
const reduxDevTool = window[keyReduxDevTool];
const devTools = reduxDevTool ? reduxDevTool() : (f) => f;

let store = createStore(reducers, {}, devTools);

export default store;

// applyMiddleware,