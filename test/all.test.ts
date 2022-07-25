import { randomDesc, randomMovie, randomTitle } from '../src';

describe('randomTitle', () => {
	it('Should be defined', () => {
		expect(randomTitle).toBeDefined();
	});
	it('Should return a string', () => {
		const res = randomTitle();
		expect(typeof res).toBe('string');
	});
	it('Should return array when given n', () => {
		const res = randomTitle(6);
		expect(res).toBeInstanceOf(Array);
		expect(res.length).toBe(6);
	});
});

describe('randomDesc', () => {
	it('Should be defined', () => {
		expect(randomDesc).toBeDefined();
	});
	it('Should return a string', () => {
		const res = randomDesc();
		expect(typeof res).toBe('string');
	});
	it('Should return array when given n', () => {
		const res = randomDesc(6);
		expect(res).toBeInstanceOf(Array);
		expect(res.length).toBe(6);
	});
});

describe('randomMovie', () => {
	it('Should be defined', () => {
		expect(randomMovie).toBeDefined();
	});
	it('Should return a string', () => {
		expect(typeof randomMovie()).toBe('object');
	});
	it('Should return array when given n', () => {
		const res = randomMovie(6);
		if (res instanceof Array) {
			expect(res.length).toBe(6);
		}
	});
});
