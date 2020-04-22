import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import useStyles from "../../styles";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState({});
	const [bangaldeshData, setBangaldeshData] = useState({});

	useEffect(() => {
		const getDailyData = async () => {
			setDailyData(await fetchDailyData());
		};

		getDailyData();
	}, []);

	useEffect(() => {
		console.log("aaaa", dailyData);
	}, [dailyData]);

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: [
					"Infected " + confirmed.value,
					"Recovered " + recovered.value,
					"Deaths " + deaths.value,
				],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [confirmed.value, recovered.value, deaths.value],
						borderColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
					},
				],
			}}
			options={{
				legend: { display: true },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: true,
					},
				],
			}}
		/>
	) : null;

	return (
		<Grid container spacing={3} justify='center'>
			<Grid justify='center' item xs={12} md={5}>
				{country ? barChart : lineChart}
			</Grid>
		</Grid>
	);
};

export default Chart;
