import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { userSignupRequest } from '../../actions/signupActions'
import SignupInput from './SignupInput';
import ValidateSignupInputForm from './SignupFormValidation';



//Top level signup component. Renders dashboard page on success
class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName:'',
			password:'',
      email:''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange(e) {
		this.setState({[e.target.name] : e.target.value })
	}
	isValid() {
		const {errors, isValid } = ValidateSignupInputForm(this.state)
		let errorArray = []
		if(!isValid) {
			for(var value in errors) {
				errorArray.push(errors[value] + " ")
			}
			alert(errorArray)
		}
		return isValid
	}
	onSubmit(e) {
		e.preventDefault();
		if(this.isValid()){
			var _this = this.state
			this.props.userSignupRequest(_this).then(function(response) {
				if(response.data) {
					browserHistory.push('wait/');
				}
				}).catch(function(error) {
					return setTimeout(function(error) {
						alert(error.data)
						console.log('ERROR ON SIGNUP FORM', error)
				}, 0)
			})
		}
	}
	render() {
		return (
			<div className="login-input-outer">
				<SignupInput onSubmit={this.onSubmit}
							 onChange={this.onChange}
							 userName={this.state.userName}
               email={this.state.email}
							 password={this.state.password} />
			</div>
		)
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default SignupForm

