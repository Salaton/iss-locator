const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between"
};
const Header = props => (
	<div>
		<header>
			<nav style={styles}>
				<div className="brand">
					<h4>ISS LOCATOR</h4>
				</div>
				<div className="details">
					<h4 id="alt">Altitude: {props.altitude}</h4>
				</div>
				<div>
					<h4 id="lat">Latitude: {props.latitude}</h4>
				</div>
				<div>
					<h4 id="lon">Longitude: {props.longitude}</h4>
				</div>
			</nav>
		</header>
	</div>
);

export default Header;
