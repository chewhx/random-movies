import { TMovie } from './pickOne';

const pickSome = (items: TMovie[], n: number) => {
	if (!items || !items.length) {
		throw Error('Invalid items');
	}

	const res: TMovie[] = [];

	for (let i = 0; i < n; i++) {
		res.push(items[Math.floor(Math.random() * items.length)]);
	}

	return res;
};

export default pickSome;
