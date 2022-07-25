import { Movie, movies } from './data/movies';
import pickOne from './lib/pickOne';
import pickSome from './lib/pickSome';

/**
 *
 * @param n Number of results
 * @returns One or more movie titles
 */
export const randomTitle = (n?: number): string | string[] => {
	if (n) {
		return pickSome(movies, n).map((e) => e.title);
	}
	return pickOne(movies).title;
};

/**
 *
 * @param n Number of results
 * @returns One or more movie descriptions
 */
export const randomDesc = (n?: number): string | string[] => {
	if (n) {
		return pickSome(movies, n).map((e) => e.description);
	}
	return pickOne(movies).description;
};

/**
 *
 * @param n Number of results
 * @returns One or more movie objects
 */
export const randomMovie = (n?: number): Movie[] | Movie => {
	if (n) {
		return pickSome(movies, n) as Movie[];
	}
	return pickOne(movies) as Movie;
};
