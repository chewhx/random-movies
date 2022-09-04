const movie = {
	adult: false,
	backdrop_path: '/zGs5tZOlvc9cprdcU6kDOVNpujf.jpg',
	genre_ids: [53, 9648],
	id: 567,
	original_language: 'en',
	original_title: 'Rear Window',
	overview:
		'A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.',
	popularity: 18.709,
	poster_path: '/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg',
	release_date: '1954-08-01',
	title: 'Rear Window',
	video: false,
	vote_average: 8.4,
	vote_count: 5240,
	index: 74,
};

export type TMovie = typeof movie;

/**
 * @credits https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
 */

export default function pickOne(items: TMovie[]): TMovie {
	if (!items || !items.length) {
		throw Error('No items');
	}
	return items[Math.floor(Math.random() * items.length)];
}
