import React, { Component } from "react";
import "./App.css";
import Flat from "./components/flat";
import GoogleMapReact from "google-map-react";
import Marker from "./components/marker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectFlat: null
    };
  }

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data
        });
        console.log(data);
      });
  }
  selectFlat = flat => {
    console.log(flat);
    this.setState({
      selectFlat: flat
    });
  };
  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search" />
          <div className="flats">
            {this.state.flats.map(flat => {
              return (
                <Flat
                  key={flat.name}
                  flat={flat}
                  selectFlat={this.selectflat}
                />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} zoom={11}>
            {this.state.flats.map(flat => {
              return (
                <Marker
                  key={flat.name}
                  lat={flat.lat}
                  lng={flat.lng}
                  text={"€ " + flat.price}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
