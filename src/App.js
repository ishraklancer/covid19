import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Country from "./components/Country/Country";
import Bangladesh from "./components/Bangladesh/Bangladesh";
import styles from "./styles.css";
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
		<div className='container'>
			<Typography variant='h4' style={{ textAlign: "center" }}>
				COVID-19 TRACKER 🦠
			</Typography>
			<Typography
				style={{
					textAlign: "left",
					fontFamily: "monospace",
				}}
				variant='caption'
			>
				Developed by Shadman Ishrak
			</Typography>
			Last Updated {new Date(corona.lastUpdate).toLocaleString()}
			<Cards />
			<Bangladesh data={corona} />
			<Typography variant='h6' style={{ textAlign: "center" }}>
				🗺️Country Specific Charts
			</Typography>
			<Country handleCountryChange={handleCountryChange} />
			<Chart data={countryData} country={country} />
		</div>
	);
};

export default App;
