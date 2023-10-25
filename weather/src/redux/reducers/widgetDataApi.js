import {handleActions} from 'redux-actions';
import {GET_WIDGET_DATA} from '../actions/widget'


export default handleActions(
  {
   
    
    [GET_WIDGET_DATA]: (state, action) => {

        return {
          ...state,
          ...action.payload
        }
      }
  },
 {}
);