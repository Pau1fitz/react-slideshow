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
		autoplay
		defaultIndex={1}
		effect={'fade'}
		slideInterval={4000}
		slides={slides}
		height={'100%'}
		width={'100%'}>
	</Slideshow>,
	document.getElementById('root')
);
