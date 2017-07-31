import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './components/Slideshow';

const slides = [
	'images/one.jpg',
	'images/two.jpg',
	'images/three.jpg',
	'images/four.jpg'
];

ReactDOM.render(
	<Slideshow
		showIndex
		showArrows
		slideInterval={4000}
		slides={slides}
	/>,
	document.getElementById('root')
);
