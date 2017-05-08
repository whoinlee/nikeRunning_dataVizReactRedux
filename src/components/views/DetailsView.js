import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import DetailMap from '../ui/DetailMap'
import DetailCharts from '../ui/DetailCharts'
import DetailProperties from '../ui/DetailProperties'
import '../../stylesheets/details.scss'


const DetailsView = ({ run, onBackClick=f=>f }) => {

	// componentWillUnmount() {
	// 	// console.log('INFO DetailsView :: componentWillUnmount')
	// 	if (this.viewContainer) this.viewContainer = null
	// }

	const onBackClicked = (e) => {
		console.log("INFO DetailsView :: onBackClicked")
		
		e.preventDefault()
		hashHistory.push('/')
		onBackClick()
	}

	// render() {
	// <div className="detailsView" ref={(ref) => { this.viewContainer = ref; }}>
		return (
			<div className="detailsView">
				<button 
					className="backButton" 
					id="topBackButton" 
					onClick={onBackClicked}>Back</button>
				<DetailProperties model={run} />
				<DetailCharts model={run} />
				<DetailMap model={run} />
				<button 
					className="backButton"  
					id="bottomBackButton" 
					onClick={onBackClicked}>Back</button>
			</div>
		)
	// }
}

DetailsView.propTypes = {
	run: React.PropTypes.object.isRequired,
	onBackClick: React.PropTypes.func.isRequired
}

export default DetailsView