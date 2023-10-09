export const UPDATE_SPEED_VALUE = 'UPDATE_SPEED_VALUE'

export function updateSpeedValue() {
  return function (dispatch) {
  dispatch({
   type: UPDATE_SPEED_VALUE,
   action: '3.0 m/c'
  })
  }
}
