import * as movie from '../src';

describe('movie.randomTitle', () => {
	const res = movie.randomTitle();

	it('is defined', () => {
		expect(movie.randomTitle).toBeDefined();
	});

	it('returns string', () => {
		expect(res).toBeDefined();
		expect(typeof res).toBe('string');
	});
});

describe('movie.randomTitles', () => {
	const res = movie.randomTitles(10);

	it('is defined', () => {
		expect(movie.randomTitles).toBeDefined();
	});

	it('returns array of strings', () => {
		expect(res).toBeDefined();
		expect(res).toHaveLength(10);
		expect(res).toBeInstanceOf(Array);
		res.forEach((e) => {
			expect(typeof e).toBe('string');
		});
	});
});

describe('movie.randomMovie', () => {
	it('is defined', () => {
		expect(movie.randomMovie).toBeDefined();
	});

	it('returns an object', () => {
		const res = movie.randomMovie();
		expect(res).toBeDefined();
		expect(Object.keys(res)).toMatchObject([
			'Poster_Link',
			'Series_Title',
			'Released_Year',
			'Certificate',
			'Runtime',
			'Genre',
			'IMDB_Rating',
			'Overview',
			'Meta_score',
			'Director',
			'Star1',
			'Star2',
			'Star3',
			'Star4',
			'No_of_Votes',
			'Gross',
		]);
	});
});

describe('movie.randomMovies', () => {
	it('is defined', () => {
		expect(movie.randomMovies).toBeDefined();
	});

	it('returns an array of object', () => {
		const res = movie.randomMovies(6);
		expect(res).toBeDefined();
		expect(res).toHaveLength(6);
		expect(res).toBeInstanceOf(Array);
	});
});

describe('movie.randomOverview', () => {
	const res = movie.randomOverview();

	it('is defined', () => {
		expect(movie.randomOverview).toBeDefined();
	});

	it('returns string', () => {
		expect(res).toBeDefined();
		expect(typeof res).toBe('string');
	});
});

describe('movie.randomOverviews', () => {
	const res = movie.randomOverviews(4);

	it('is defined', () => {
		expect(movie.randomOverviews).toBeDefined();
	});

	it('returns array of strings', () => {
		expect(res).toBeDefined();
		expect(res).toHaveLength(4);
		expect(res).toBeInstanceOf(Array);
		res.forEach((e) => {
			expect(typeof e).toBe('string');
		});
	});
});
