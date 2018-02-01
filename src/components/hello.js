import React, { Component } from 'react';

class Hello extends Component {
    state = {}
    render() {
        return (
            <div>Hello {this.props.firstName} {this.props.lastName}</div>
        );
    }
}

export default Hello;