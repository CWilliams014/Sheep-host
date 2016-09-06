import React from 'react';
import SecretClick from './SecretClick'

const UserProfile = React.createClass({
	render(){
		let userDBProfileInfo = []
		let userInfo = []
		let infoProps = this.props.profileInfo
		console.log('infoprops', infoProps)

		for(var i in infoProps) {
			console.log('for in',infoProps[i])
			console.log('pr', i)
			if(typeof infoProps[i] === 'string') userInfo.push(<p><strong>{i}: </strong> <span>{infoProps[i]}</span></p>)
			if(infoProps[i].constructor === Array) {
				userDBProfileInfo.push(<div key={i} className="panel-body">Database: {i}</div>, <li key={i+1}>Collections: {infoProps[i]}</li>)
				console.log('display', userDBProfileInfo)
			}	
		}
		return (
<<<<<<< HEAD
			<div>
				<div>
					<h2>Your Profile</h2>
				</div>
				<div className="well well-lg">
					
					{userInfo}
				  {userDBProfileInfo}
				  <br></br>
				  <SecretClick onClick={this.props.onClick} secretKeyVisible={this.props.secretKeyVisible}/>
				</div>
			</div>
		)
	}
})



export default UserProfile;

//dev ID
//database names
	//collection names
	//Schema for each collection
//Permissions