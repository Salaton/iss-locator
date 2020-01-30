import React, { Component } from "react";
import Head from "next/head";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentData: []
    };
  }

  async componentDidMount() {
    this._isMounted = true;

    try {
      const res = await fetch(
        "https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/1/&apiKey=4DF924-E6LFYR-EXUUHF-4AEC"
      );
      const json = await res.json();
      console.log(json);
      const { satlatitude, satlongitude, sataltitude } = json.positions[0];
      this.setState({
        latitude: satlatitude,
        longitude: satlongitude,
        altitude: sataltitude
      });
      this.state.map.panTo({ lat: satlatitude, lng: satlongitude });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>ISS Locator</title>
        </Head>
        <Header
          altitude={this.state.altitude}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />

        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{
            lat: 1.22392,
            lng: 36.8665
          }}
          onReady={(mapProps, map) => {
            this.setState({ map: map });
          }}
        >
          <Marker
            position={{ lat: this.state.latitude, lng: this.state.longitude }}
          />
        </Map>

        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDr30ivldXG2Dy7OSAv9zjQ6yi97rqbUq8"
})(MapContainer);
