import React from 'react'
import { connect } from 'react-redux';

import ContactForm from '../../form'

class Createform extends React.Component {

	handleSubmit(values) {
		values.preventDefault()
		
		debugger
	}
	render(){
		return(
			<ContactForm onSubmit={this.handleSubmit.bind(this)}/>
		)
	}
}
// export default Createform


const mapStateToProps = state => (() =>{
console.log(">>>>>>>>>>>>>>>>>>>> ",state.form)
  return{
  	form: state.form
  }
})

export default connect(mapStateToProps, null)(Createform)