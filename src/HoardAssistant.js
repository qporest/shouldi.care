import React from 'react'
import './HoardAssistant.css'

var states = {
	OVERVIEW: 0
}


export default class HoardAssistant extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentState: states.OVERVIEW,
			searchValue: "Shrek CDs"
		}

		this.changeSearch = this.changeSearch.bind(this)
	}

	changeSearch(e){
		this.setState({
			searchValue: e.target.value
		})
		console.log(e.target.value)
	}

	render(){
		return (
			<div className="hoard-assistant">
				<h1>Should you hoard this?</h1>
				<h6>Pretty sure you should not, but go ahead and check.</h6>
				<input type="text" value={this.state.searchValue} onChange={this.changeSearch} />
				<input type="button" value="Check" />
			</div>
		)
	}
}