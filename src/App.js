import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Country from "./components/Country/Country";
import Bangladesh from "./components/Bangladesh/Bangladesh";
import styles from "./styles.css";
import virusIcon from "./virus2.svg";
import { fetchData } from "./api";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles;
	const [corona, setCorona] = useState({});
	const [country, setCountry] = useState("");
	const [countryData, setCountryData] = useState({});

	useEffect(async () => {
		console.log("s: it works");
		const data = await fetchData();
		setCorona({
			lastUpdate: data.lastUpdate,
		});
	}, []);

	const handleCountryChange = async (country) => {
		const data = await fetchData(country);
		setCountryData(data);
		setCountry(country);
	};

	return (
		<React.Fragment>
			<div className='container'>
				<Typography variant='h3' style={{ textAlign: "center" }}>
					COVID-19 TRACKER{" "}
					<img src={virusIcon} style={{ width: 40, height: 40 }} />
				</Typography>
				<Typography
					style={{
						textAlign: "center",
						fontFamily: "monospace",
						fontWeight: "bold",
					}}
					variant='body2'
				>
					Developed by Shadman Ishrak
				</Typography>
				Info Last Updated {new Date(corona.lastUpdate).toLocaleString()}
				<Cards />
				<Bangladesh data={corona} />
				<Typography variant='h6' style={{ textAlign: "center" }}>
					🗺️Country Specific Charts
				</Typography>
				<Country handleCountryChange={handleCountryChange} />
				<Chart data={countryData} country={country} style={{ padding: 0 }} />
			</div>
			<p></p>
		</React.Fragment>
	);
};

export default App;
