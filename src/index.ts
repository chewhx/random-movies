import _data from '../data/imdb.json';
import { pickOne } from './utils/pickOne';
import { pickSome } from './utils/pickSome';

export function randomTitle() {
	return pickOne(_data)['Series_Title'];
}

export function randomTitles(n: number) {
	return pickSome(_data, n).map((e) => e['Series_Title']);
}

export function randomMovie() {
	return pickOne(_data);
}

export function randomMovies(n: number) {
	return pickSome(_data, n);
}

export function randomOverview() {
	return pickOne(_data)['Overview'];
}

export function randomOverviews(n: number) {
	return pickSome(_data, n).map((e) => e['Overview']);
}
