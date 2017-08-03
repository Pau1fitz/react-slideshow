import React, { Component } from 'react';
import Arrows from '../Arrows';
import './Slideshow.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: props.defaultIndex || 0,
			slideInterval: props.slideInterval || 2000,
			showIndex: props.showIndex || true,
			showArrows: props.showArrows || true,
			effect: props.effect || true,
			autoplay: props.autoplay || true,
			enableKeyboard: props.enableKeyboard || true,
			slides: props.slides.length > 0 ? props.slides : props.children
		};
	}

	componentDidMount(e) {

		if(this.state.autoplay)
			this.runSlideShow();

		if(this.state.enableKeyboard)
			document.addEventListener('keydown', this.handleKeyboard);
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
		document.removeEventListener('keydown', this.handleKeyboard);
	}

	handleKeyboard = (e) => {
		e.keyCode === 37 ? this.decreaseCount() : e.keyCode === 39 ? this.increaseCount() : null;
	}

	runSlideShow = () => {
		let intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
		this.setState({
			intervalId
		});
	}

	autoSlideshow = () => {
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	restartSlideshow = () => {
		clearInterval(this.state.intervalId);
		this.runSlideShow();
	}

	increaseCount = () => {

		this.state.effect === 'left' ?
		this.setState({
			effect: 'right'
		}) : this.state.effect === 'bounce-left' ?
		this.setState({
			effect: 'bounce-right'
		}) : null;

		this.state.autoplay ? this.restartSlideshow() : null;
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	decreaseCount = () => {

		this.state.effect === 'right' ? this.setState({
			effect: 'left'
		}) : this.state.effect === 'bounce-right' ?
		this.setState({
			effect: 'bounce-left'
		}) : null;

		this.state.autoplay ? this.restartSlideshow() : null;

		let currentSlide;
		currentSlide = this.state.currentSlide === 0 ? this.state.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
		this.setState({
			currentSlide
		});
	}

	toggleArrows = () => {
	 	this.setState({
			showArrows: !this.state.showArrows
		});
 	}

	toggleIndex = () => {
		this.setState({
			showIndex: !this.state.showIndex
		});
	}

	toggleKeyboard = () => {

		let handleKeyboard = () => {
			if(this.state.enableKeyboard) {
				document.addEventListener('keydown', this.handleKeyboard);
			} else {
				document.removeEventListener('keydown', this.handleKeyboard);
			}
		}

		this.setState({
			enableKeyboard: !this.state.enableKeyboard
		}, () => {
			handleKeyboard();
		});
	}

	changeEffect = (e) => {
		this.setState({
			effect: e.target.value
		});
	}

	toggleAutoplay = () => {

		let handleAutoplay = () => {
			this.state.autoplay ? this.restartSlideshow() : clearInterval(this.state.intervalId);
		}

		this.setState({
			autoplay: !this.state.autoplay
		}, () => {
			handleAutoplay();
		});
	}

	render() {

		const { slides, showIndex, effect, showArrows, enableKeyboard } = this.state;

		let slideEffect = effect === undefined ? 'fade' : effect;
		let slideShowSlides;

		if(!this.props.children){
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i} style={{backgroundImage: `url(${slide})`}}></li>
			});
		} else {
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i}>{slide}</li>
			});
		}

		return (

			<div className="demo">

				<div className="demo-controls">

					<div className="demo-control" onChange={this.toggleArrows}>
						<span>Toggle Arrows</span>
						<input type="checkbox" id="check-arrows" />
						<label htmlFor="check-arrows"><div className="handle"></div></label>
					</div>

					<div className="demo-control" onChange={this.toggleIndex}>
						<span>Toggle Index</span>
						<input type="checkbox" id="check-index" />
						<label htmlFor="check-index"><div className="handle"></div></label>
					</div>

					<div className="demo-control" onChange={this.toggleAutoplay}>
						<span>Autoplay</span>
						<input type="checkbox" id="check-autoplay" />
						<label htmlFor="check-autoplay"><div className="handle"></div></label>
					</div>

					<div className="demo-control" onChange={this.toggleKeyboard}>
						<span>Keyboard Control</span>
						<input type="checkbox" id="check-keyboard" />
						<label htmlFor="check-keyboard"><div className="handle"></div></label>
					</div>

					<div className="demo-control">
						<span>Effect</span>
						<select className="select-effect" onChange={this.changeEffect} value={this.state.effect}>
							<option value="fade">Fade</option>
							<option value="left">Left</option>
							<option value="right">Right</option>
							<option value="top">Top</option>
							<option value="bottom">Bottom</option>
							<option value="bounce-right">Bounce Right</option>
							<option value="bounce-left">Bounce Left</option>
						</select>
					</div>

				</div>

				<div style={{position:'absolute', height: this.props.height || '100%', width: this.props.width || '100%'}}>
					<div className="slideshow-container">
						<ul className="slides">
							{slideShowSlides}
						</ul>

						{showArrows &&  (
							<Arrows decreaseCount={this.decreaseCount} increaseCount={this.increaseCount}/>
						)}

						{showIndex && (
							<div className="show-index">
								<p>{`${this.state.currentSlide + 1} / ${slides.length}`}</p>
							</div>
						)}
					</div>
				</div>




			</div>
		);
	}
}

export default Slideshow;
