import React from 'react';
import DataItem from './DataItem'

// Container which holds each piece of data (<DataItem />) from database as list item

const Display = (props) => {
	var dataArray = []
	props.display.forEach((el, i) => {
		dataArray.push(<DataItem className="list-item" key={i} keys={i} info={el} />)
	})
	return (
		<div className="display jumbotron">
			<ul className="list-group" style={{marginTop:'170px'}}>
					{dataArray}	
			</ul>
		</div>
	)
}


export default Display;
