import React, { Component } from 'react';
import './App.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			slideTimer: props.slideInterval ? props.slideInterval : 10000000
		}
	}

	componentDidMount() {
		this.runSlideShow();
	}

	runSlideShow = () => {
		let intervalId = setInterval(this.autoSlideshow, this.state.slideTimer);
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
		});
	}

	restartSlideshow = () => {
		clearInterval(this.state.intervalId);
		this.runSlideShow();
	}

	increaseCount = () => {
		this.restartSlideshow();
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.props.slides.length
		});


	}

	decreaseCount = () => {

		this.restartSlideshow();
		let currentSlide = this.state.currentSlide === 0 ? this.props.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
		this.setState({
			currentSlide
		});


	}

	render() {

		console.log(this.state)

		let slides = this.props.slides.map((slide, i) => {
			return <li className = {this.state.currentSlide === i ? "slideshow-image slide showing" : "slideshow-image slide"} key={i} style={{backgroundImage: `url(${slide})`}}></li>
		})

		return (

			<div className="slideshow-container">
				<ul className="slides">
					{slides}
				</ul>
				{this.props.showArrows &&  (
					<div>
						<span onClick={this.decreaseCount} className="arrow btn-arrow btn-arrow-left"></span>
						<span onClick={this.increaseCount} className="arrow btn-arrow btn-arrow-right"></span>
					</div>
				)}
			</div>
		);
	}
}


export default Slideshow;
