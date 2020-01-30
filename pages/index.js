import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import fetch from "isomorphic-unfetch";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export class MapContainer extends Component {
	static async getInitialProps(ctx) {
		const res = await fetch("https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/1/&apiKey=4DF924-E6LFYR-EXUUHF-4AEC");
		const json = await res.json();
		console.log(json);
		console.log(`Show data fetched. Count: ${json.length}`);
		return { latitude: json.positions.satlatitude, longitude: json.positions.satlongitude };
	}
	render() {
		return (
			<div>
				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233
					}}
				>
					<Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyDr30ivldXG2Dy7OSAv9zjQ6yi97rqbUq8"
})(MapContainer);
