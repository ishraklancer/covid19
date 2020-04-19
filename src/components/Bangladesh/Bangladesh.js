import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import UseAnimations from "react-useanimations";
import { fetchBangladeshData, fetchGlobalData } from "../../api";

const Bangladesh = (props) => {
	const classes = useStyles();
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = async () => {
			setData(await fetchBangladeshData());
		};

		getData();
	}, []);

	useEffect(() => {
		console.log("bd2", data);
	}, [data]);

	return (
		<React.Fragment>
			<Grid
				container
				spacing={3}
				xs={12}
				md={5}
				justify='center'
				className={classes.bd}
				component={Paper}
			>
				<Grid item xs={12}>
					<Typography style={{ textAlign: "center" }} variant='h6'>
						🌷 Bangladesh Info
					</Typography>
				</Grid>
				<Grid item xs={4} component={Paper} className={classes.totalInfected}>
					<Typography variant='caption'>
						Total Infected:{" "}
						{(data.cases && (
							<CountUp
								start={0}
								end={data.cases}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>
				<Grid item xs={4} component={Paper} className={classes.totalRecovered}>
					<Typography variant='caption'>
						Total Recovered:{" "}
						{(data.recovered && (
							<CountUp
								start={0}
								end={data.recovered}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>
				<Grid item xs={4} component={Paper} className={classes.totalDeaths}>
					<Typography variant='caption'>
						Total Deaths:{" "}
						{(data.deaths && (
							<CountUp
								start={0}
								end={data.deaths}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>

				<Grid item xs={4} component={Paper} className={classes.todayInfected}>
					<Typography variant='caption'>
						Cases Today:{" "}
						{(data.cases && (
							<CountUp
								start={0}
								end={data.todayCases}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>
				<Grid item xs={4} component={Paper} className={classes.todayDeaths}>
					<Typography variant='caption'>
						Deaths Today:{" "}
						{(data.cases && (
							<CountUp
								start={0}
								end={data.todayDeaths}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>
				<Grid item xs={4} component={Paper} className={classes.totalTests}>
					<Typography variant='caption'>
						Total Tested:{" "}
						{(data.totalTests && (
							<CountUp
								start={0}
								end={data.totalTests}
								duration={2}
								separator={","}
							/>
						)) || (
							<UseAnimations
								animationKey='loading'
								size={20}
								style={{ cursor: "pointer" }}
							/>
						)}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Bangladesh;
