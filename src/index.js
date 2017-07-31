import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './Slideshow';
import './App.css';

const slides = [
	'images/one.jpg',
	'images/two.jpg',
	'images/three.jpg',
	'images/four.jpg'
];

ReactDOM.render(
	<Slideshow showArrows slides={slides} />,
	document.getElementById('root')
);
