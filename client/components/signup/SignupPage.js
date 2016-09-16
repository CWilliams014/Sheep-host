import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import NavigationBar from '../NavigationBar';
import SignupForm from './SignupForm';



//This renders signupform - which is where they signup, confirming they're account and rendering to DB
class SignupPage extends React.Component {
	render() {
		const { userSignupRequest } = this.props

		return (
			<div>
			<NavigationBar />
			<div className="h jumbotron">
				<div className="col-md-4 col-md-offset-4">

					<SignupForm 
						userSignupRequest={userSignupRequest} 
					/>
				</div>
			</div>
			</div>	
		)
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}



export default connect(null, {userSignupRequest }) (SignupPage);