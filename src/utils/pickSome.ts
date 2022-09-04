export function pickSome(items: any[], n: number) {
	if (!items || !items.length) {
		return [];
	}

	const res = [];

	for (let i = 0; i < n; i++) {
		res.push(items[Math.floor(Math.random() * items.length)]);
	}

	return res;
}
