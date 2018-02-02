import React, { Component } from "react";
import "./search.css";

class Marker extends Component {
  state = {};

  handleSearch = () => {
    this.props.findApartments(this.props.searchQuery);
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
