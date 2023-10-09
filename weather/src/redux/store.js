import { applyMiddleware, combineReducers,  createStore } from 'redux';
import widgetData from './reducers/widgetData';

let reducers = combineReducers({

    widgetData: widgetData,
    userName: {}
  });

  const keyReduxDevTool = 'REDUX_DEVTOOLS_EXTENSION';
const reduxDevTool = window[keyReduxDevTool];
const devTools = reduxDevTool ? reduxDevTool() : (f) => f;

let store = createStore(reducers, {}, devTools);

export default store;