import React from 'react';

//Displays GET, POST, PUT, DELETE	true or false for API permissions

const Permissions = (props) => {
		let radioArray = [];
		for(let permission in props.permissions){
			let permissionObj = {};
			permissionObj[permission] = props.permissions[permission];
			radioArray.push(permissionObj);
		}
		console.log(props.permissions['GET'], radioArray);
		return(
			<div>
				<h2 className="display">Set Client Permissions</h2>
					<div className="display user-profile font jumbotron">
						{radioArray.map(function(permission, i){
						return(
							<div><strong>{Object.keys(permission)[0]} : </strong>  
								<input
									key={2*i-1}
									type="radio"
									value={Object.keys(permission)[0]}
									onChange={props.onClick}
									checked={true === permission[Object.keys(permission)[0]]}
								/> True     
								<input
								  key={2*i}
									type="radio"
									value={Object.keys(permission)[0]} 
									onChange={props.onClick}
									checked={false === permission[Object.keys(permission)[0]]}
								/> False 
							</div>
						)
					})
			}
			<br></br>
			<button
				className="btn btn-default btn-lg"
				onClick={props.savePermissions}
			>Save</button>
			</div>
			</div>
		)
	}

export default Permissions