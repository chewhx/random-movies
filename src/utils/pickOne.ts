/**
 * @credits https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
 */

export function pickOne(items: any[]): any {
	if (!items || !items.length) {
		return [];
	}

	return items[Math.floor(Math.random() * items.length)];
}
