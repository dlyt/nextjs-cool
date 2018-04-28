export const actionTypes = {
  ADD: 'ADD',
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}