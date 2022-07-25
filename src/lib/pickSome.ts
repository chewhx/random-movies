import { Movie } from '../data/movies';

const pickSome = (items: Movie[], n: number) => {
	if (!items || !items.length) {
		throw Error('Invalid items');
	}

	const res: Movie[] = [];

	for (let i = 0; i < n; i++) {
		res.push(items[Math.floor(Math.random() * items.length)]);
	}

	return res;
};

export default pickSome;
