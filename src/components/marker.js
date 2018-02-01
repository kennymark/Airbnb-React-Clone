import React, { Component } from 'react';
import './marker.css'
class Marker extends Component {
    state = {}
    render() {
        return (
            <div className="marker">
                {this.props.text}
            </div>
        );
    }
}

export default Marker;