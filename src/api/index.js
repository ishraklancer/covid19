import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const bangladesh_url =
	"https://coronavirus-19-api.herokuapp.com/countries/bangladesh";

export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		return error;
	}
};

export const fetchGlobalData = async () => {
	try {
		const response = await axios.get(url);
		// console.log(response.data);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date,
		}));
	} catch (error) {
		return error;
	}
};

export const fetchBangladeshData = async () => {
	try {
		const { data } = await axios.get(bangladesh_url);
		console.log("bd1", data);
		return data;
	} catch (error) {
		return error;
	}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {
		return error;
	}
};
