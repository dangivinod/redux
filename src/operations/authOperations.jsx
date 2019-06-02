import axios from 'axios';

import * as actionType  from '../actionType'

import {LoginAction} from '../actions'

const LoginOperation = (data) => {
	return dispatch => {
		axios.post('https://reqres.in/api/users', data)
    .then(function (response) {
      console.log(response);
      dispatch({
      	type:actionType.LOGIN_ACTION,
				data:response.data
      })
    })
    .catch(function (error) {
      console.log(error);
      debugger
    });
  }
}

export {LoginOperation}