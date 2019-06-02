import React from 'react';
import { connect } from 'react-redux';
import {LoginAction} from '../../../actions'
import { LoginOperation } from '../../../operations'

class LoginUser extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	UserInfo = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	SubmitUserInfo(e) {
		e.preventDefault();
		let data = {
			name: this.state.userName,
			job: this.state.password
		}
		// this.props.LoginAction(data)
		this.props.LoginOperation(data)
	}
	Register = () => {
		debugger
		this.props.history.push('/register')
	}

	render(){
		return(
			<form onSubmit={this.SubmitUserInfo.bind(this)} >
			  <div className="container">
			    <label for="uname"><b>Username</b></label>
			    <input type="text" placeholder="Enter Username" name="userName" required onChange={this.UserInfo} />
			    <label for="password"><b>Password</b></label>
			    <input type="password" placeholder="Enter Password" name="password" required onChange={this.UserInfo} />

			    <button type="submit">Login</button>
			    <button onClick={this.Register} >Register</button>
			    </div>
			</form>
		)
	}
}

const mapStateToProps = state => ({
  todos: state.loginReducer
})

const mapDispatchToProps = dispatch => ({
  LoginOperation: (data) => dispatch(LoginOperation(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser)