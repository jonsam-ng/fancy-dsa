function binarySearch(seq, x, low = 0, high = seq.length) {
	while (low <= high) {
		const mid = (low + high) >> 1;
		if (x === seq[mid]) return mid;
		if (x > seq[mid]) low = mid + 1;
		else high = mid - 1;
	}
	return -1;
}
function exponentialSearch(seq, x) {
	const len = seq.length;
	if (seq[0] === x) return 0;
	let i = 1;
	while (i < len && seq[i] <= x) i *= 2;
	return binarySearch(seq, x, i / 2, Math.min(i, len - 1));
}

const seq = Array.from(Array(100000000).keys());
console.time("search");
console.log(exponentialSearch(seq, 99999000));
console.timeEnd("search");
