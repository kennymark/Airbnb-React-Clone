import React, { Component } from 'react';
import './flat.css';

class Flat extends Component {
	handleClick = () => {
		this.props.selectFlat(this.props.flat);
	};

	render() {
		const title = this.props.flat.price + this.props.flat.priceCurrency + ' - ' + this.props.flat.name;

		const style = {
			backgroundImage: `url('${this.props.flat.imageUrl}')`,
			height: '400px'
		};

		return (
			<div className="flat" onClick={this.handleClick}>
				<div className="flat-picture" style={style} />
				<div className="flat-title"> {title} </div>
			</div>
		);
	}
}

export default Flat;
