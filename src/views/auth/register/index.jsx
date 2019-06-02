import React from 'react'
import { connect } from 'react-redux';

import ContactForm from '../../form'

class Createform extends React.Component {

	handleSubmit(values) {
		values.preventDefault()
	}
	render(){
		return(
			<ContactForm onSubmit={this.handleSubmit.bind(this)}/>
		)
	}
}

const mapStateToProps = state => (() =>{
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", state)
  return{
  	form: state.form
  }
})

export default connect(mapStateToProps, null)(Createform)