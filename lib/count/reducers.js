import { actionTypes } from './actions'

const initialState = 0

export default (state = initialState, action) => {
	switch(action.type) {
    case actionTypes.ADD:
			return state + 1
		default: return state
	}
}