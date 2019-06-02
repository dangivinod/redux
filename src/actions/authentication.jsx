import * as actionType  from '../actionType'

export const LoginAction = (data) => {
	return {
			type:actionType.LOGIN_ACTION,
			data
		}
}

export const DommyData = () => {
	
	return {
		type:actionType.DOMMY_DATA
	}
}