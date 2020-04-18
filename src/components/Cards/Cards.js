import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import { fetchData, fetchGlobalData } from "../../api";

const Cards = () => {
	const classes = useStyles();
	const [data, setData] = useState({});
	var x = 123123;

	useEffect(() => {
		const getData = async () => {
			const tempData = await fetchGlobalData();
			setData({
				confirmed: tempData.confirmed.value,
				recovered: tempData.recovered.value,
				deaths: tempData.deaths.value,
			});
		};

		getData();
	});

	return (
		<React.Fragment>
			<Grid
				container
				spacing={8}
				justify='center'
				style={{ padding: 0 }}
				className={classes.grid}
			>
				<Grid item xs={12} justify='center'>
					<Typography variant='h5' style={{ textAlign: "center", padding: 0 }}>
						{" "}
						🌎 World Info{" "}
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					md={2}
					component={Paper}
					className={`${classes.confirmed} ${classes.paper}`}
				>
					<Typography gutterBottom>Infected</Typography>
					<Typography variant='h6'>
						{data.confirmed && (
							<CountUp
								start={0}
								end={data.confirmed}
								duration={2.5}
								separator=','
							/>
						)}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={2}
					component={Paper}
					className={`${classes.recovered} ${classes.paper}`}
				>
					<Typography gutterBottom>Recovered</Typography>
					<Typography variant='h6'>
						{data.recovered && (
							<CountUp
								start={0}
								end={data.recovered}
								duration={2.5}
								separator=','
							/>
						)}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={2}
					component={Paper}
					className={`${classes.deaths} ${classes.paper}`}
				>
					<Typography gutterBottom>Deaths</Typography>
					<Typography variant='h6'>
						{data.deaths && (
							<CountUp
								start={0}
								end={data.deaths}
								duration={2.5}
								separator=','
							/>
						)}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Cards;
