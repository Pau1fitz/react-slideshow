import React, { Component } from 'react';
import Arrows from '../Arrows';
import './Slideshow.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			slideTimer: props.slideInterval ? props.slideInterval : 2000
		};
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
		let currentSlide;
		currentSlide = this.state.currentSlide === 0 ? this.props.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
		this.setState({
			currentSlide
		});
	}

	render() {

		const { slides, showIndex } = this.props;

		let slideShowSlides = slides.map((slide, i) => {
			return <li className = {this.state.currentSlide === i ? "slideshow-image slide showing" : "slideshow-image slide"} key={i} style={{backgroundImage: `url(${slide})`}}></li>
		});

		return (

			<div className="slideshow-container">
				<ul className="slides">
					{slideShowSlides}
				</ul>

				{this.props.showArrows &&  (
					<Arrows decreaseCount={this.decreaseCount} increaseCount={this.increaseCount}/>
				)}

				{showIndex && (
					<div className="show-index">
						<p>{`${this.state.currentSlide + 1} / ${slides.length}`}</p>
					</div>
				)}
			</div>
		);
	}
}

export default Slideshow;
