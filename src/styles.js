import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	grid: {
		marginTop: 20,
		marginBottom: "10px",
		width: "100%",
	},
	bd: {
		marginTop: 20,
		marginBottom: "30px",
		width: "100%",
	},
	gridContent: {
		textAlign: "center",
	},
	paper: {
		margin: "2% !important",
		border: "2px solid gainsboro",
		borderRadius: 25,
	},
	deaths: {
		backgroundColor: "#f24646",
		color: "white",
	},
	confirmed: {
		backgroundColor: "#09729c",
		color: "white",
	},
	recovered: {
		backgroundColor: "#2fc448",
		color: "white",
	},
	totalInfected: {
		backgroundColor: "#1e5cc7",
		color: "white",
		borderRadius: 5,
	},
	totalDeaths: {
		backgroundColor: "#d62222",
		color: "white",
		borderRadius: 5,
	},
	totalRecovered: {
		backgroundColor: "#22d622",
		color: "white",
		borderRadius: 5,
	},
}));

export default useStyles;
