import pickOne, { TMovie } from './lib/pickOne';
import _data from '../data/results.json';
import pickSome from './lib/pickSome';

type TOptions = {
	info?: boolean;
	movies?: number;
};

function optionsIsObject(options: TOptions): options is TOptions {
	return 'info' in options || 'movies' in options;
}

function movies(): string;
function movies(options?: number): string[];
function movies(options?: TOptions): TMovie[];
function movies(options?: TOptions | number): string | string[] | TMovie[] {
	if (!options) {
		return pickOne(_data).title;
	}
	if (typeof options === 'number') {
		return pickSome(_data, options).map((e) => e.title);
	}
	if (optionsIsObject(options)) {
		const res = pickSome(_data, options.movies || 1);
		if (!options.info) {
			return res.map((e) => e.title);
		}
		return res;
	}
	return pickOne(_data).title;
}
console.log(movies());
console.log(movies(5));
console.log(movies({ info: true, movies: 2 }));
