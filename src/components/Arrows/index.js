import React from 'react';
import './Arrows.css';

const Arrows = function(props)  {

	return (
		<div className="arrows">
			<span onClick={props.decreaseCount} className="arrow btn-arrow btn-arrow-left"></span>
			<span onClick={props.increaseCount} className="arrow btn-arrow btn-arrow-right"></span>
		</div>
	);

}

export default Arrows;
