import React, { Component } from 'react';
import './search.css';

class Marker extends Component {
	state = {};

	handleSearch = (e) => {
		this.props.findApartments(e.target.value);
	};

	render() {
		return (
			<div className="search">
				<input type="text" className=".search" onChange={this.handleSearch} />
			</div>
		);
	}
}

export default Marker;
