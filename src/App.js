import React, { Component } from 'react';
import './App.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0
		}
	}

	componentDidMount() {
		let intervalId = setInterval(this.autoSlideshow, 5000);
		this.setState({
			intervalId
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	autoSlideshow = () => {

		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.props.slides.length
		})
	}

	render() {

		let slides = this.props.slides.map((slide, i) => {
			return <li className = {this.state.currentSlide === i ? "slideshow-image slide showing" : "slideshow-image slide"} key={i} style={{backgroundImage: `url(${slide})`}}></li>
		})

		return (

			<div  className="slideshow-container">

				<ul className="slides">
					{slides}
				</ul>

			</div>
		);

	}

}


export default Slideshow;
