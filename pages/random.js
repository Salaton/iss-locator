import React from "react";
import fetch from "isomorphic-unfetch";

class Page extends React.Component {
	static async getInitialProps(ctx) {
		const res = await fetch("https://api.github.com/repos/zeit/next.js");
		const json = await res.json();
		console.log(json);
		return { stars: json.stargazers_count, watchers: json.watchers_count, language: json.language, ownerID: json.owner.id };
	}

	render() {
		return (
			<div>
				Next stars: {this.props.stars} Watchers: {this.props.watchers} Language: {this.props.language} Owner: {this.props.ownerID}
			</div>
		);
	}
}

export default Page;
