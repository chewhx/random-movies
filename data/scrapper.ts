import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs-extra';

dotenv.config();

const makeUrlParams = (page: number) =>
	new URLSearchParams({
		api_key: process.env.TMDB_API_KEY || '',
		page: page.toString(),
	});

const topMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated';

const getTopRatedMovies = async (page: number) => {
	const { data } = await axios.get(
		`${topMoviesUrl}?${makeUrlParams(page).toString()}`
	);
	return data;
};

const scrape = async (_pages: number[]) => {
	let _index = 0;
	const _res: any[] = [];

	await Promise.all(
		_pages.map(async (_page) => {
			const { results } = await getTopRatedMovies(_page);
			results.forEach((e: any) => _res.push({ ...e, index: _index++ }));
		})
	);

	fs.writeJsonSync('./data/results.json', _res);
};

scrape(Array.from({ length: 10 }, (_, i) => i + 1));
