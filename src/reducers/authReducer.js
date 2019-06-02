import * as actionType from '../actionType'

const initialState = {
  user: []
}

function loginReducer(state = initialState, action) {
  // debugger
  switch (action.type) {
    case actionType.LOGIN_ACTION:
    debugger
      return Object.assign({}, action.data)
    default:
      return state
  }
}

function DommyReducers(state = initialState, action){
	switch (action.type){
		case actionType.DOMMY_DATA:
			return Object.assign({}, action.data)
		default:
			return state
	}
}

export default loginReducer;
