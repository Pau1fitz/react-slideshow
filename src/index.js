import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Slideshow from './App';

const slides = [
	'http://images.entertainment.ie/images_content/rectangle/620x372/bret__hitman__hart_by_kingmezoarts-d4s8or9.png',
	'https://uproxx.files.wordpress.com/2016/02/gammasquadbrethartfacts1.jpg?quality=100&w=650',
	'https://i.ytimg.com/vi/g_hsTrNVXTY/maxresdefault.jpg'
];

ReactDOM.render(
	<Slideshow slides={slides} />,
	document.getElementById('root')
);
