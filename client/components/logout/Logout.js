import React from 'react';
import { browserHistory } from 'react-router';

//Deletes users cookies and token 

class LogoutComponent extends React.Component {
	componentDidMount(){
		localStorage.clear();
		document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
		browserHistory.push("login");
	}
	render(){
		return(<div/>)
	}
}

export default LogoutComponent;
