import { Movie } from '../data/movies';

/**
 * @credits https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
 */
const pickOne = (items: Movie[]): Movie => {
	if (!items || !items.length) {
		throw Error('Invalid items');
	}
	return items[Math.floor(Math.random() * items.length)];
};

export default pickOne;
